// 寄生组合式继承
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function prototype(child, parent) {
    var prototype = object(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

// 当我们使用的时候：
prototype(Child, Parent);

// 一次是设置子类型实例的原型的时候：

// Child.prototype = new Parent(); //去除这句
// 一次在创建子类型实例的时候：

// var child1 = new Child('kevin', '18');