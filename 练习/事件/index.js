//事件冒泡
var p1 = document.getElementById('p1')
var ex1 = document.getElementById('ex1')

function bindEventEasy(elem,type,fn){
    elem.addEventListener(type,fn)
}

bindEventEasy(p1,'click',function(e){
    e.preventDefault()
    alert('激活')
})
bindEventEasy(ex1,'click',function(e){
    alert('取消')
})

//事件代理
var ex2 = document.getElementById('ex2')
function bindEvent(elem,type,selector,fn){
    if(fn == null){
        fn = selector
        selector = null
    }
    elem.addEventListener(type,function(e){
        if(selector){
            //代理
            if(e.target.matches(selector)){
                fn.call(e.target,e)
            }
        }else{
            fn(e)
        }
    })
    
    
}
bindEvent(ex2,'click','a',function(e){
    e.preventDefault()
    console.log('clicked')
})
bindEvent(ex2,'click',function(e){
    e.preventDefault()
    console.log('clicked')
})
