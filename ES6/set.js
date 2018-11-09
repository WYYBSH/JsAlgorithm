//1.类似于数组，没有重复的值
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4

//2.set的属性和方法
/********* 
Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数

add(value)：添加某个值，返回 Set 结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。
************/
s.add(8).add(8)
console.log(s.size)
console.log(s.has(8))

//3.set的遍历操作
/********
 * keys()：返回键名的遍历器
 * values()：返回键值的遍历器
 * entries()：返回键值对的遍历器
 * forEach()：使用回调函数遍历每个成员
 *********/
for(let item of s.values()){
  console.log(item)
}
for(let item of s.keys()){
  console.log(item)
}
for(let item of s.entries()){
  console.log(item)
}
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)
console.log([...s])//神奇
console.log(...[1,4,6])//扩展匀速符... 内部使用for...of循环
