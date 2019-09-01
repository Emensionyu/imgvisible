    <template>
    <div class="bi-relation-diagram" :class="getMainCls()" :style="mainStyle">
            <div :style="contentStyle">
                <div v-for="(item, index) in nodes" class="item" :class="getNodeCls(item)" :style="getNodeStyle(item)" :id="item.id" :key="index">
                        <div class="item__ct">
                            <span class="item__ct__name">
                                {{item.name}}
                            </span>
                        </div>
                        <div class="item__line1" v-if="item.showLine1" :style="item.line1Style">
                            <span class="arrow-l"></span>
                        </div>
                        <div class="item__line2" v-if="item.showLine2">
                            <div class="item__line2-h" :style="item.line2StyleOfH">
                                    <span class="arrow-l"></span>
                            </div>
                            <div class="item__line2-v" :style="item.line2StyleOfV"></div>
                        </div>
                        <div class="item__line3" v-if="item.showLine3">
                            <div class="item__line3-h" :style="item.line3StyleOfH"></div>
                            <div class="item__line3-v" :style="item.line3StyleOfV">
                                    <span class="arrow-t"></span>
                            </div>
                        </div>
                </div>
            </div>
    </div>
</template>

<script>
import Fmind from './fmind'
export default {
    name: 'relation-diagram',
    props: {
        scale: {
            type: Number,
            default: 1
        },
        objectRelation: {
            type: Array,
        },
        layout:{
            type:String,
            default:'default'
        }
    },
    data() {
        let fmind = new Fmind({
            objectRelation: this.objectRelation
        })
        // console.log(fmind.nodes)
        return {
            nodes: fmind.nodes,
            fMindSize: fmind.size
        };
    },
    computed: {
        contentStyle() {
            let obj = {
                transform: `scale(${this.scale})`,
                'transform-origin':'0 center'
            }
            return obj;
        },
        mainStyle() {
            let width = this.fMindSize.width * this.scale ;
            let height =  this.fMindSize.height * this.scale
            let obj = {
                width: width + 'px',
                height: height + 'px'
            };
            if(this.layout == 'center'){
                obj['margin-left'] = - width/2 + 'px';
                obj['margin-top'] = - height/2 + 'px';
            }
          

            return obj;
        }
    },
    methods: {
        getMainCls(){
            if(this.layout == 'center'){
                return 'is-absolute';
            }
        },
        getNodeCls(node){
            return node.core?'is-core':'';
        },
        getNodeStyle(node) {
            // console.log(node)
            return {
                left: node.position.left + "px",
                top: node.position.top + "px",
                width: node.size.width + "px",
                height: node.size.height + "px",
                'line-height': node.size.height - 2 + "px",
            };
        }
    },
    mounted() {}
};
</script>
<style lang="less">
    .bi-relation-diagram{
  
    &.is-absolute{
        position: absolute;
        left: 50%;
        top: 36%;
    }
  .item {
        position: absolute;
        &.is-core{
            .item__ct{
                background: #ff8000;
                color:#fff;
            }
        }
  }

  .item__ct {
        border-radius: 4px;
        border: 1px solid #ff8000;
        font-size: 12px;
        text-align: center;
        color: #181c25;
        box-sizing: border-box;
  }

  .item__ct_content {
        background: #ff8000;
  }

  .item__line1 {
        height: 1px;
        background: #ff8000;
        position: absolute;
  }
  .item__line2{
      position: absolute;
      right: 0;
  }
  .item__line2-v {
        width: 1px;
        background: #ff8000;
        position: absolute;
      
  }

  .item__line2-h {
        height: 1px;
        background: #ff8000;
        position: absolute;
        left:0;
  }

  .arrow-l {
        display: none;
        position: absolute;
        border-color: transparent #ff8000 transparent transparent;
        border-width: 6px;
        border-style: solid;
        top: -4px;
        left: -8px;
  }

  .arrow-t {
        display: none;
        position: absolute;
        border-color: transparent transparent #ff8000 transparent;
        border-width: 6px;
        border-style: solid;
        top: -9px;
        left: -4px;
  }

  .item__line3 {
        position: absolute;
        left: 50%;
  }

  .item__line3-v {
        width: 1px;
        background: #ff8000;
        position: absolute;
        left: 50%;
  }

  .item__line3-h {
        height: 1px;
        background: #ff8000;
        position: absolute;
        left: 50%;
  }
}

</style>