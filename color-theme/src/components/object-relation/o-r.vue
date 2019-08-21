<template>
    <div class="o-r container">
        <div class="item" v-for="(item,index) in data" :key="index">
            <div class="item__ct">{{item.name}}</div>
            <div class="item__line1"></div>
            <div class="item__line2">
                <div class="item__line2-h"></div>
                <div class="item__line2-s"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Node from './node.js'
export default {
    data(){
        return{
    data : [{
	name:'0',
	id:0,
},{
	name:'1',
	id:1,
	core:true,
	parents:[0]
},{
	name:'2',
	id:2,
	parents:[1,5]
},{
	name:'3',
	id:3,
	parents:[2]
},{
	name:'4',
	id:4,
	parents:[3,6]
},{
	name:'5',
	id:5,
},{
	name:'6',
	id:6,
},{
	name:'7',
	id:7,
}],
 nodes:[]
        }
       

    }
    ,
    methods:{
        initdata(){
            console.log('init啦啦啦')
           let data=this.data
            for (var i = 0; i < data.length; i++) {
               this.nodes.push(new node(data[i]))
            };

            for (var i = 0; i < this.nodes.length; i++) {
                this.nodes[i].initParent(nodes);
            }

        },
     node(opts) {
	this.name = opts.name;
	this.id = opts.id;
	this.parents = opts.parents;
	this.parentNodes = [];
},
//    initParent(allNodes) {
// 	let count =0;
// 	if(this.parents && this.parents.length){
// 		for (var i = 0; i < allNodes.length; i++) {
// 			if(this.parents.indexOf(allNodes[i].id)>-1){
// 				let node = allNodes[i];
// 				node.setParentNum(count);
// 				count++;
// 				this.parentNodes.push(node)
// 			}
// 		}
// 	}
// },
// isPaint (){
// 	if(!this.isPaintFlag){
// 		this.isPaintFlag = true;
// 	}
// },


// hasParents(){
// 	return this.parentNodes.length;
// }
// ,

// wangyzuopai(posi,opts){
// 	let offsetTop = opts.offsetTop||0;

// 	 $('#'+this.id).css({
// 	 	left:(posi.left - 140),
// 	 	top:posi.top + offsetTop

// 	 });
// 	 this.paint();
// },

// getPosition(){
// 	return $('#'+this.id).position();
// },

// paint(){
// 	let parentNodes = this.parentNodes;
// 	console.log(this.name)
	
// 	console.log('我有爹：'+this.parentNodes.length +'个')
// 	for (var i = 0; i < parentNodes.length; i++) {
// 		let parentNode = parentNodes[i];
// 		parentNode.wangyzuopai(this.getPosition(),{
// 			offsetTop: parentNode.parentNum * 100
// 		})
// 		// this.drawline(this,parentNode)
// 	}
// },

// // nodes.prototype.drawline = function(startNode,endNode){

// // }

// setParentNum(i){
// 	this.parentNum = i;
// 	if(this.parentNum === 0){
// 		 $('#'+this.id).find('.item__line1').show();
// 	}else if(this.parentNum >0){
// 		 $('#'+this.id).find('.item__line2').show();
// 	}
// 	// return
// },
    },
     mounted() {
         this.initdata()
   
  }
}

</script>
<style lang="less" scoped>
.item{

    line-height: 40px;
    position: absolute;
		}
		.item__ct{
			    width: 100px;
    height: 40px;
    background: orange;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    text-align: center;
		}
		.item__line1{
    width: 40px;
    height: 3px;
    background: red;
    position: absolute;
    top: 22px;
    right: -40px;
    display: none;
		}

			.item__line2{
  
    display: none;
		}
		.item__line2-s{
    width: 3px;
    height: 84px;
    background: red;
    position: absolute;
    top: -61px;
    right: -90px;
		}
		.item__line2-h{
			    width: 90px;
			    height: 3px;
			    background: red;
			    position: absolute;
			    top: 22px;
			    right: -90px;
			}
		
</style>
