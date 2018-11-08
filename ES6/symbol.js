let s = Symbol("hi");
let s2 = Symbol(1)

//let ss = s.toString();
console.log(s)
console.log(s2)

//特点：保证每个属性名都是独一无二的。
//新的数据类型：undefined,null,Boolean,String,Number,Object,Symbol
//生成：let s = Symbol()    不能使用new