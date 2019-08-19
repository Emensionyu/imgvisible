//策略模式的思想
//定义一系列的算法,把他们一个个封装起来,每一个都是一个策略类,并且使他们可以相互tidings.
//在客户端context发起请求的时候,context总是把请求委托给这些策略对象中的某一个进行计算.

//策略类
var performanceS=function(){}
performanceS.prototype.calculate=function(salary){
    return salary*4
}
var performanceA=function(){}
performanceA.prototype.calculate=function(salary){
    return salary*2
}
var performanceB=function(){}
performanceB.prototype.calculate=function(salary){
    return salary*1
}
//定义奖金类
var Bonus=function(){
    this.salary=null; //原始工资
    this.strategy=null;  //绩效等级对应的策略对象
}
Bonus.prototype.setSalary=function(salary){
    this.salary=salary //设置员工的原始工资
}
Bonus.prototype.setStrategy=function(strategy){
    this.strategy=strategy; //设置员工绩效等级对应的策略对象
}
Bonus.prototype.getBonus=function(){ //取得奖金数额
    return this.strategy.calculate(this.salary);//把计算奖金的操作委托给对应的策略对象
}

var bonus=new Bonus()
bonus.setSalary(100000)
bonus.setStrategy(new performanceS())
console.log(bonus.getBonus())  //400000   