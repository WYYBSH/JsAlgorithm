//继承
function parent(){
    this.name = "tsubame"
}
function child(){
    this.age = 13
}
child.prototype = new parent()
var per = new child()
console.log(per.name)