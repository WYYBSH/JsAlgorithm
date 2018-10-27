//题目：封装函数 f，使 f 的 this 指向指定的对象
function bindThis(fn,oTarget){
    return fn.bind(oTarget)
}
function bindThis(fn,oTarget){
    return function(){
        return fn.apply(oTarget,arguments)
    }
}
//call()和apply()参数不同，返回运行结果，改变this,即函数的调用对象
//bind()返回一个改变执行上下文的函数副本,创建了一个新函数