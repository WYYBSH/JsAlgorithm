//获取2017-06-10格式的日期
function formateDate(dt){
    if(!dt){
        dt = new Date()
    }
    var year = dt.getFullYear()
    var month = dt.getMonth() + 1
    var date = dt.getDate()

    if(month < 10){
        month = '0' + month
    }
    if(date < 10){
        date = '0' +date
    }

    return year + '-' + month + '-' + date
}
console.log(formateDate(new Date()))


//获取随机数，要求是长度一致的字符串格式
var random = Math.random()
random = random + '0000000000'
random = random.slice(0,6)
console.log(random)


//写一个能遍历对象和数组的通用forEach函数
function forEach(obj,fn){
    var key
    if(obj instanceof Array){
        obj.forEach(function(item,index){
            fn(index,item)
        })
    }else{
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                fn(key,obj[key])
            }
        }
    }
}
var arr = [1,2,3]
forEach(arr,function(index,item){
    console.log(index,item)
})
var obj = {x:100,y:200}
forEach(obj,function(key,value){
    console.log(key,value)
})
