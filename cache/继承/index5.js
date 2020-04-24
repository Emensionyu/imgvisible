//寄生组合继承
function Parent (name){
    this.name=name;
    this.colors = ['red', 'blue', 'green'];
}
Parent.prototype.getName = function () {
    console.log(this.name)
}
function Child(name,age){
    Parent.call(name);
    this.age=age
}
Child.prototype=new Parent()
var child1 = new Child('kevin', '18');
console.log(child1)
debugger