// 数字排序
let num = ['1','4','2','3'];
num.sort((a,b)=>(a-b));

//字符串排序
let arr = ['a','d','w','c'];
arr.sort((a,b)=>{
    if(a>b){
        return 1 //返回的数字大于0，b排到a之前
    }else if(b>a){
        return -1 //返回的数字小于0，a排在b之前
    }else{
        return 0
    }
})

console.log(num);
console.log(arr);