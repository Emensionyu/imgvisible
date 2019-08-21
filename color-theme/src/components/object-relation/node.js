 
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
				node.setParentNum(count);
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
		let parentNode = parentNodes[i];
		parentNode.wangyzuopai(this.getPosition(),{
			offsetTop: parentNode.parentNum * 100
		})
		// this.drawline(this,parentNode)
	}
}

// nodes.prototype.drawline = function(startNode,endNode){

// }

node.prototype.setParentNum = function(i){
	this.parentNum = i;
	if(this.parentNum === 0){
		 $('#'+this.id).find('.item__line1').show();
	}else if(this.parentNum >0){
		 $('#'+this.id).find('.item__line2').show();
	}
	// return
}
export default {Node}
