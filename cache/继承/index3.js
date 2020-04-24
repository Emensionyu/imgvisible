// 组合继承 
function Parent (name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

function Child (name, age) {
    Parent.call(this, name);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
// debugger
var child1 = new Child('kevin');

child1.colors.push('black');

console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child('daisy');

// console.log(child2.name); // daisy
console.log(child2.colors); // ["red", "blue", "green"]

// 组合继承 构造+prototype属性