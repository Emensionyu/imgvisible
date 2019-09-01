define(function (require, exports, module) {
const NODE_HEIGHT = 24;
const TOP_OFFSET = 10;
const HORZION_OFFSET = 10 ;

let FmindNode = function (opts = {}) {
    this.name = opts.name;
    this.id = opts.id;
    this.parents = opts.parents;
    this.targets = opts.targets;
    this.core = opts.core || false
    this.targetNodes = [];
    let width = this.getNodeWidthByText(opts.name);
    this.size = {
        width: width,
        height: NODE_HEIGHT
    }
    this.position = {
        left: 0,
        top: 0
    };

    // console.log(this.size)
};

function isChinese(temp) {
    var re = /^[\u4E00-\u9FA5]+$/;
    if (re.test(temp)) return false;
    return true;
}

FmindNode.prototype = {
    getNodeWidthByText(str) {
        let list = str.split('')
        let fontSize = 12;
        let paddingLeft = 8;
        let paddingRight = 8;
        let ftCount = 0;
        this.originNodes = [];
        this.targetNodes = [];
        list.forEach((item) => {
            if (isChinese(item)) {
                ftCount = ftCount + 1;
            } else {
                ftCount = ftCount +1;
            }
        })
        let width = paddingLeft + ftCount * fontSize + paddingRight;
        if(width<64){
            width = 64;
        }
        return width;
    },
    initTargetNodes(allNodes) {
        if (this.targets && this.targets.length) {
            for (var i = 0; i < allNodes.length; i++) {
                //如果节点id属于目标id集合
                if (this.targets.indexOf(allNodes[i].id) > -1) {
                    let targetNode = allNodes[i];
                    //目标节点关联起始节点
                    targetNode.addOriginNodes(this);
                    //当前起始节点关联目标节点
                    this.targetNodes.push(targetNode);

                    targetNode.drawLineFromTargetToOrigin(this);

                }
            }
        }
    },
    drawLineFromTargetToOrigin(originNode) {
        let sortIndexOfTargetNode = originNode.getSortIndexOfTargerNode(this);
        let sortIndexOfOriginNode = this.getSortIndexOfOriginNode(originNode)
        if (sortIndexOfTargetNode === 0 && sortIndexOfOriginNode === 0) {
            this.showLine1 = true;
            this.line1Style = {
                width: HORZION_OFFSET+'px',
                top: NODE_HEIGHT/2+'px',
                right: -HORZION_OFFSET+'px'
            }
        } else if (sortIndexOfTargetNode > 0) {
            this.showLine2 = true;
            this.line2StyleOfH = {
                width: this.size.width/2 + HORZION_OFFSET + 'px',
                top: - NODE_HEIGHT/2 + 'px',
                right: -HORZION_OFFSET+'px'
            };
            this.line2StyleOfV = {
                right: -(this.size.width/2 + HORZION_OFFSET)+'px',
                height: NODE_HEIGHT+'px',
                top:  (this.position.top)-this.size.height-TOP_OFFSET-1 +'px'
            }
        }else if(sortIndexOfTargetNode === 0 && sortIndexOfOriginNode ===1){
            this.showLine3 = true;
            this.line3StyleOfH = {
                width: this.size.width/2+ HORZION_OFFSET+'px',
                top: NODE_HEIGHT +'px',
                right: -HORZION_OFFSET+'px'
            };
            this.line3StyleOfV = {
                right: -HORZION_OFFSET+'px',
                height: NODE_HEIGHT+'px'
            }
        }
    },
    getSortIndexOfTargerNode( targetNode) {
        for (var i = 0; i <= this.targetNodes.length - 1; i++) {
            if (targetNode.id === this.targetNodes[i].id) {
                return i;
            }
        }
        return null;
    },
    //获取当前节点
    getSortIndexOfOriginNode(originNode) {
        for (var i = 0; i <= this.originNodes.length - 1; i++) {
            if (originNode.id === this.originNodes[i].id) {
                return i;
            }
        }
        return null;
    },
    addOriginNodes(node) {
        this.originNodes = this.originNodes || [];
        this.originNodes.push(node);
    },
    locate() {
        let targetNodes = this.targetNodes;
        let originNode = this;
        for (var i = 0; i < targetNodes.length; i++) {
            let targetNode = targetNodes[i];
            ////获取目标节点是起始节点的第几个目标节点
            let sortIndexOfTargetNode =  this.getSortIndexOfTargerNode(targetNode);
            //获取当前节点是目标节点的第几个起始节点
            let sortIndexOfOriginNode = targetNode.getSortIndexOfOriginNode(this);
    
            if (sortIndexOfOriginNode === 0) {
                //如果当前节点是目标节点的第0个起始节点，就让目标节点根据起始节点的位置来定位
                targetNode.locateByOriginNode( {
                    originNodePosition: this.getPosition(),
                    sortIndexOfTargetNode: sortIndexOfTargetNode
                });
            } else if (sortIndexOfOriginNode === 1) {
                //如果当前节点是目标节点的第1个起始节点，就让起始节点根据目标节点的位置来定位
                this.locateByTarget( {
                    targetNodePosition: targetNode.getPosition(),
                    targetNodeSize: targetNode.size,
                    sortIndexOfOriginNode:sortIndexOfOriginNode
                });
            }
        }
    },
    locateByOriginNode(opts) {
        let originNodePosition = opts.originNodePosition;
        let sortIndexOfTargetNode = opts.sortIndexOfTargetNode || 0;
        let offsetTop = sortIndexOfTargetNode ?( sortIndexOfTargetNode * (TOP_OFFSET+ this.size.height)) : 0;
        this.position.left = originNodePosition.left - HORZION_OFFSET - this.size.width;
        this.position.top = originNodePosition.top + offsetTop;
        //递归影响自己的目标节点
        this.locate(this);
    },
    locateByTarget(opts) {
        let targetNodePosition = opts.targetNodePosition;
        let targetNodeSize = opts.targetNodeSize;

        let sortIndexOfOriginNode = opts.sortIndexOfOriginNode||0;
        let offsetTop =  sortIndexOfOriginNode ? (sortIndexOfOriginNode * (TOP_OFFSET+this.size.height)) : 0;
 
        this.position.left = targetNodePosition.left + targetNodeSize.width + HORZION_OFFSET;
        this.position.top = targetNodePosition.top + offsetTop;
        
        // console.log(this.position)
    },

    getPosition() {
        return this.position;
    }
}
module.exports = FmindNode;

});