var myImage=(function(){
    var imgNode=document.createElement('img');
    document.body.appendChild(imgNode);
    return {
        setSrc:function(src){
            imgNode.src=src
        }
    }
})();
var proxyImage=(function(){
    var img=new Image;
    img.onload=function(){
        myImage.setSrc(this.src)
    }
    return{
        setSrc:function(src){
            myImage.setSrc('')
            img.src=src;
        }
    }
})()
proxyImage.setSrc('')
//myImage 负责给imgae设置src
//proxyimage负责预加载
//代理        的意义 单一指责原则