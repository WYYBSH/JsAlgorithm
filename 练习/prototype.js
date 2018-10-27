// 每个对象都会再其内部初始化一个属性，就是原型（prototype）
// 当我们访问一个对象的属性时，如果这个对象内部不存在这个属性，
// 那么他就会到protoype里面找这个属性，这个原型又会有自己的原型，
// 于是这样一直找下去就是我们平时说的原型链的概念

//instance.constructor.prototype = instance.__proto__

