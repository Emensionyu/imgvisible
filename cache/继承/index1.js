// 原型链继承
function Parent() {
    this.names = ['kevin', 'daisy'];
    this.age = 40
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();
child1.age = 90 //原型链上增加属性
console.log(child1.age)
child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();
// console.log(child2.age)
// debugger

console.log(child2.names); // ["kevin", "daisy", "yayu"]
// 缺点
// 引用类型的属性被所有实例共享
//在创建 Child 的实例时，不能向Parent传参