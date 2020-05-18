function Person(len) {
    if (this instanceof Person) {
        this.len = len
        this.getArea = function() {
            return 0
        }
    } else {
        return new Person(len)
    }
}

function Child(height, width) {
    Person.call(this, 3)
    this.height = height
    this.width = width
    this.getArea = function() {
        return this.height * this.width
    }
}

var ch1 = new Child(5, 10)
console.log(ch1.len) // undefined  
console.log(ch1.constructor) // Child
console.log(Child.prototype.constructor) // Child
console.log(ch1.__proto__ === Child.prototype) // true
console.log(Child.__proto__ === Person.prototype) // false
console.log(Child.__proto__ === Function.prototype) // true