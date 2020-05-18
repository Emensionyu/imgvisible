//构造函数继承
function Parent() {
    this.names = ['kevin', 'daisy'];
}

function Child() {
    Parent.call(this); // 经典构造函数继承
}
Child.prototype = new Parent()
var child1 = new Child();

child1.names.push('yayu');

console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();

console.log(child2.names); // ["kevin", "daisy"]
// 构造函数继承 每次创建实例都会创建一遍方法。