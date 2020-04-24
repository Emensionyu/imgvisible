// 原型链继承
function Parent () {
    this.names = ['kevin', 'daisy'];
    this.age=40
}

function Child () {

}

Child.prototype = new Parent();

var child1 = new Child();
child1.age=90 //原型链上增加属性

// child1.names.push('yayu');

// console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();
console.log(child2.age) 
debugger

// console.log(child2.names); // ["kevin", "daisy", "yayu"]