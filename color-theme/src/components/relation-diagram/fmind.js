
define(function (require, exports, module) {
    let FmindNode = require('./fmind-node');
    let Fmind = function (objectRelation) {

        this.initData(objectRelation);
    }

    Fmind.prototype = {
        
        initData(opts = {}) {
            let data = opts.objectRelation;
            let nodes = [];
            for (var i = 0; i < data.length; i++) {
                let tmp = new FmindNode(data[i]);
                nodes.push(tmp);
            }
            for (var j = 0; j < nodes.length; j++) {
                nodes[j].initTargetNodes(nodes);
            }
          
            this.nodes = nodes;
            this.startRender(nodes);
            this.size = this.computedSize(nodes);
        },
        startRender(nodes) {
            for (var i = 0; i < nodes.length; i++) {
                nodes[i].locate();
            }

            this.mainTransformLeft = this.getMainTransformLeft(nodes);
            this.changeAllNodeLeft(this.mainTransformLeft);
           
        },
        changeAllNodeLeft(value){
            this.nodes.forEach((node)=>{
                node.position.left +=value;
            });
        },
        computedSize(nodes) {
            let maxLeftNode;
            let minLeftNode;
            let minTopNode;
            let maxTopNode;

            nodes.forEach((node) => {
                if(!maxLeftNode){
                    maxLeftNode = node;
                }
                if(!minLeftNode){
                    minLeftNode = node;
                }
                if(!maxTopNode){
                    maxTopNode = node;
                }
                if(!minTopNode){
                    minTopNode = node;
                }
                if(node.position.left >= maxLeftNode.position.left){
                    maxLeftNode = node;
                }
                if(node.position.left <= minLeftNode.position.left){
                    minLeftNode = node;
                }
                if(node.position.top >= maxTopNode.position.top){
                    maxTopNode = node;
                }
                if(node.position.top <= minTopNode.position.top){
                    minTopNode = node;
                }
                
            });
            
            return {
                width:maxLeftNode.position.left-minLeftNode.position.left + maxLeftNode.size.width,
                height:maxTopNode.position.top - minTopNode.position.top + maxLeftNode.size.height,

            }
            // return topMax / TOP_OFFSET + 1;
        },
      
        getMainTransformLeft(nodes) {
            let minLeft = 0;
            nodes.forEach((node) => {
                if (node && node.position && node.position.left && node.position.left < minLeft) {
                    minLeft = node.position.left;
                }
            });
            return -minLeft;
        }
    }

    module.exports = Fmind;

});