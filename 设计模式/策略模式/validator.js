//准备一些策略类
var strategies={
    minLength:function(value,length,errMsg){
        if(value.length<length){
            return errMsg
        }
    },
    isMobile:function(value,errMsg){
        if(!/^1[3|5|8][0-9]{9}$/.test(value)){
            return errMsg
        }
    }
}
var validator=function(){
    this.cache=[];
}
// validator对象添加校验规则
validator.prototype.add=function(dom,rule,errmsg){
    var array=rule.aplit(":");
    var strategy=array.shift();
    array.unshift(dom.value);
    array.push(errmsg);
    return this.strategies[strategy].apply(this,array)
}
//validator .start()启动校验和规则。
validator.prototype.start=function(){
    for(let i=0;i<this.cache.length;validatorFunc=this.cache[i++]){
        var msg=validatorFunc();//开始校验，取得校验后的返回结果
        if(msg){
            return msg;
        }
    }
}

var registForm=document.getElementById('form')
registForm.onsubmit=function(){
    var errorMsg=validateFunc();
    if(errorMsg){
        return false   //未通过校验
    }
}
var validateFunc=function(){
    var validator=new validator() //创建以恶搞验证对象
    validator.add(registForm.name,'isNonEmpty','用户名不能为空')
    validator.add(registForm.password,'minlength:6','密码长度不能小于6')
    var errMsg=validator.start(); //获取检验结果
    return errMsg   //返回校验结果

}