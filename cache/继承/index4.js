//原型式继承
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);

var person2 = createObj(person);
person1.name = 'person1';
console.log(person2.name); // kevin

person1.firesnds.push('taylor');
// debugger

console.log(person2.friends); // ["daisy", "kelly", "taylor"]