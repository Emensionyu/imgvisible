<template>
  <div id="main" :style="scaleObject" >
    <div
      v-for="(item, index) in nodes"
      class="item"
      :style="getStyle(item)"
      :id="item.id"
      :key="index"
    >
      <div :class="[item.core ? 'item__ct_content' : '', 'item__ct']">{{item.name}}</div>
      <div class="item__line1" v-if="item.showLine1">
        <span class="arrow-l"></span>
      </div>
      <div class="item__line2" v-if="item.showLine2">
        <div class="item__line2-h">
          <span class="arrow-l"></span>
        </div>
        <div class="item__line2-s"></div>
      </div>
      <div class="item__line3" v-if="item.showLine3">
        <div class="item__line3-h"></div>
        <div class="item__line3-s">
          <span class="arrow-t"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Tag } from '../../../../ant-design-vue/types';
export default {
  props:{
     scale: {
       type:Number,
       default:1
     }
     ,
     objectRelation:{
       type:Array,
     }
  },
  data() {
    return {
      // data: [
      //   {
      //     name: "次对象",
      //     id: 1,
      //   },
      //   {
      //     name: "主对象A",
      //     id: 2,
      //     targets: [1,5],
      //     core: true
      //   },
      //   {
      //     name: "次对象一",
      //     id: 3,
      //     targets: [2]
      //   },
      //   {
      //     name: "次对象二",
      //     id: 4,
      //     targets:[3]
      //   },

      //   {
      //     name: "次对象三",
      //     id: 5,
      //     // targets: []
      //   },
      //    {
      //     name: "A6",
      //     id: 6,
      //     targets: [3]
      //   },
        
      // ],

      nodes: [],
       
    };
   
  },
  computed:{
    scaleObject(){
       return{
        //  left:'600px',
         position:'absolute',
         left:'100px',
         transform:`scale(${this.scale})`
       }
       
      }
  },
  methods: {
    getNode(opts) {
      var obj = {};
      obj.name = opts.name;
      obj.id = opts.id;
      obj.parents = opts.parents;
      obj.targets = opts.targets;
      obj.core=opts.core||false
      obj.targetNodes = [];
      obj.position = {
        left: 0,
        top: 0
      };
      return obj;
    },

    initdata() {
      console.log("init啦啦啦");
      let data = this.objectRelation;
      for (var i = 0; i < data.length; i++) {
        this.nodes.push(this.getNode(data[i]));
      }
      console.log(this.nodes);

      for (var j = 0; j < this.nodes.length; j++) {
        this.initTargetNodes(this.nodes[j], this.nodes);
      }
      console.log(this.nodes);
      //   console.log(this.nodes);

      this.boot();
    },
    initTargetNodes(oneNode, allNodes) {
      let count = 0;
      if (oneNode.targets && oneNode.targets.length) {
        for (var i = 0; i < allNodes.length; i++) {
          if (oneNode.targets.indexOf(allNodes[i].id) > -1) {
            let targetNode = allNodes[i];
            this.addOriginNodes(targetNode, oneNode);
            oneNode.targetNodes.push(targetNode);

            this.drawLineFromTargetToOrigin(targetNode, oneNode);
          }
        }
      }
    },
    drawLineFromTargetToOrigin(targetNode, originNode) {
      let sortIndexOfTargetNode = this.getSortIndexOfTargerNode(
        originNode,
        targetNode
      );
      let sortIndexOfOriginNode = this.getSortIndexOfOriginNode(
        originNode,
        targetNode
      );
      if (sortIndexOfTargetNode === 0 && sortIndexOfOriginNode === 0) {
        targetNode.showLine1 = true;
      } else if (sortIndexOfTargetNode > 0) {
        targetNode.showLine2 = true;
      } else if (sortIndexOfTargetNode === 0 && sortIndexOfOriginNode === 1) {
        targetNode.showLine3 = true;
      }
    },
    getSortIndexOfTargerNode(originNode, targetNode) {
      for (var i = 0; i <= originNode.targetNodes.length - 1; i++) {
        if (targetNode.id === originNode.targetNodes[i].id) {
          return i;
        }
      }
      return null;
    },
    getSortIndexOfOriginNode(originNode, targetNode) {
      for (var i = 0; i <= targetNode.originNodes.length - 1; i++) {
        if (originNode.id === targetNode.originNodes[i].id) {
          return i;
        }
      }
      return null;
    },
    addOriginNodes(targetNode, oneNode) {
      targetNode.originNodes = targetNode.originNodes || [];
      targetNode.originNodes.push(oneNode);
    },
    boot() {
      let nodes = this.nodes;
      for (var i = 0; i < nodes.length; i++) {
        this.locate(nodes[i]);
      }
    },
    locate(node) {
      let targetNodes = node.targetNodes;
      for (var i = 0; i < targetNodes.length; i++) {
        let targetNode = targetNodes[i];
        let sortIndexOfTargetNode = this.getSortIndexOfTargerNode(
          node,
          targetNode
        );
        let sortIndexOfOriginNode = this.getSortIndexOfOriginNode(
          node,
          targetNode
        );

        // if(this.id === 7){
        // 	 console.log(sortIndexOfOriginNode)
        // }
        if (sortIndexOfOriginNode === 0) {
          this.locateByOriginNode(targetNode, this.getPosition(node), {
            offsetTop: sortIndexOfTargetNode ? sortIndexOfTargetNode * 50 : 0
          });
        } else if (sortIndexOfOriginNode === 1) {
          this.locateByTarget(node,this.getPosition(targetNode), {
            offsetTop: sortIndexOfOriginNode ? sortIndexOfOriginNode * 50 : 0
          });
        }
      }
    },
    locateByOriginNode(targetNode, position, opts) {
      let offsetTop = opts.offsetTop || 0;
      targetNode.position.left = position.left - 140;
      targetNode.position.top = position.top + offsetTop;
      this.locate(targetNode);
    },
    locateByTarget(targetNode, position, opts) {
      let offsetTop = opts.offsetTop || 0;
      targetNode.position.left = position.left + 140;
      targetNode.position.top = position.top + offsetTop;
      // this.locate();
    },
    setParentNum(node, i) {
      node.parentNum = i;
      if (node.parentNum === 0) {
        //  $('#'+this.id).find('.item__line1').show();
      } else if (node.parentNum > 0) {
        //  $('#'+this.id).find('.item__line2').show();
      }
      // return
    },

    // isPaint (){
    // 	if(!this.isPaintFlag){
    // 		this.isPaintFlag = true;
    // 	}
    // },

    hasParents(node) {
      return node.parentNodes.length;
    },
    moveParent(parentNode, childposition, opts) {
      let offsetTop = opts.offsetTop || 0;
      parentNode.position = {
        left: childposition.left - 140,
        top: childposition.top + offsetTop
      };
      this.paint(parentNode);
    },

    getPosition(node) {
      return node.position;
    },

    paint(node) {
      let parentNodes = node.parentNodes;
      console.log(node.name);

      console.log("我有爹：" + node.parentNodes.length + "个");
      for (var i = 0; i < parentNodes.length; i++) {
        let parentNode = parentNodes[i];
        this.moveParent(parentNode, this.getPosition(node), {
          offsetTop: parentNode.parentNum * 50
        });
        // this.drawline(this,parentNode)
      }
    },
    getStyle(node) {
      return {
        left: node.position.left + "px",
        top: node.position.top + "px"
      };
    }

    // // nodes.prototype.drawline = function(startNode,endNode){

    // // }
  },
  mounted() {
    this.initdata();
  }
};
</script>
<style lang="less" scoped>
.item {
  line-height: 40px;
  position: absolute;
}
.item__ct {
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border:1px solid orange;
  // color: #fff;
  font-size: 14px;
  text-align: center;
}
.item__ct_content{
   background: orange;
}
.item__line1 {
  width: 38px;
  height: 2px;
  background: orange;
  position: absolute;
  top: 22px;
  right: -38px;
}

.item__line2-s {
  width: 2px;
  height: 30px;
  background: orange;
  position: absolute;
  top: -8px;
  right: -90px;
}
.item__line2-h {
  width: 90px;
  height: 2px;
  background: orange;
  position: absolute;
  top: 20px;
  right: -90px;
}
.arrow-l {
  display: none;
  position: absolute;
  border-color: transparent orange transparent transparent;
  border-width: 6px;
  border-style: solid;
  top: -4px;
  left: -8px;
}

.arrow-t {
  display: none;
  position: absolute;
  border-color: transparent transparent orange transparent;
  border-width: 6px;
  border-style: solid;
  top: -9px;
  left: -4px;
}

.item__line3-s {
  width: 2px;
  height: 28px;
  background: orange;
  position: absolute;
  top: 42px;
  left: 50%;
}
.item__line3-h {
  width: 90px;
  height: 2px;
  background: orange;
  position: absolute;
  top: 70px;
  left: 50%;
}
</style>
