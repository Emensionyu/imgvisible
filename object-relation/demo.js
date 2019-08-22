var data = [{
	name:'A0',
	id:0,
},{
	name:'A1',
	id:1,
	core:true,
	parents:[0]
},{
	name:'A2',
	id:2,
    parents:[1]
}
,{
	name:'A3',
	id:3,
	parents:[2]
},{
	name:'A4',
	id:4,
	parents:[3,6]
},{
	name:'A5',
	id:5,
},{
	name:'A6',
	id:6,
},{
	name:'A7',
	id:7,
}]
for (var i = 0; i < data.length; i++) {
	$('#main').append('<div class="item" id="'+data[i].id+'"><div class="item__ct">'+data[i].name+'</div><div class="item__line1"></div><div class="item__line2"><div class="item__line2-h"></div><div class="item__line2-s"></div></div></div>')
}

// var data = [{
// 	name:'A1',
// 	id:1,
// },{
// 	name:'A2',
// 	id:2,
// 	parents:[1]
// },{
// 	name:'A3',
// 	id:3,
// 	parents:[2]
// }]

function node(opts) {
	this.name = opts.name;
	this.id = opts.id;
	this.parents = opts.parents;
	this.parentNodes = [];
}
node.prototype.initParent = function(allNodes) {
	let count =0;
	if(this.parents && this.parents.length){
		for (var i = 0; i < allNodes.length; i++) {
			if(this.parents.indexOf(allNodes[i].id)>-1){
				let node = allNodes[i];
				let map = {};
				let childID = this.id;
				map[childID] = count;
				node.markNumberWhenAsParentNode(map);
				count++;
				this.parentNodes.push(node)
			}
		}
	}
};
node.prototype.isPaint = function(){
	if(!this.isPaintFlag){
		this.isPaintFlag = true;
	}
}


node.prototype.hasParents = function(){
	return this.parentNodes.length;
}


node.prototype.wangyzuopai = function(posi,opts){
	let offsetTop = opts.offsetTop||0;

	 $('#'+this.id).css({
	 	left:(posi.left - 140),
	 	top:posi.top + offsetTop

	 });
	 this.paint();
}

node.prototype.getPosition = function(){
	return $('#'+this.id).position();
}

node.prototype.paint = function(){
	let parentNodes = this.parentNodes;
	console.log(this.name)
	// if(this.id === 2){
	// 	debugger;
	// }
	console.log('我有爹：'+this.parentNodes.length +'个')
	for (var i = 0; i < parentNodes.length; i++) {
		let childID = this.id;
		let parentNode = parentNodes[i];
		parentNode.wangyzuopai(this.getPosition(),{
			offsetTop: parentNode.getMarkNumberWhenAsParentNode(childID) ? parentNode.getMarkNumberWhenAsParentNode(childID)* 100 : 0
		})
		// this.drawline(this,parentNode)
	}
}

// nodes.prototype.drawline = function(startNode,endNode){

// }
node.prototype.getMarkNumberWhenAsParentNode = function(childID){
	if(!this.markNumberMap){
		return null;
	}
	return this.markNumberMap[childID];
}
node.prototype.markNumberWhenAsParentNode = function(map){
	this.markNumberMap = this.markNumberMap||{};
	this.markNumberMap = Object.assign(this.markNumberMap ,map)
	// if(this.getMarkNumberWhenAsParentNode() === 0){
	// 	 $('#'+this.id).find('.item__line1').show();
	// }else if(this.getMarkNumberWhenAsParentNode()  >0){
	// 	 $('#'+this.id).find('.item__line2').show();
	// }
	// return
}



let nodes = [];

for (var i = 0; i < data.length; i++) {
	nodes.push(new node(data[i]))
};

for (var i = 0; i < nodes.length; i++) {
	nodes[i].initParent(nodes);
}

function boot(nodes){
	for (var i = 0; i < nodes.length; i++) {
		let node = nodes[i];
		if(node.hasParents()){

            node.paint()
            // debugger
		}
	}
}
boot(nodes);
// $('#main').css({
// 	transform :'scale(0.5)'
// })
console.log(nodes);