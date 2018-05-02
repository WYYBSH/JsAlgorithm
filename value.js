// https://www.nowcoder.com/question/next?pid=8246802&qid=138031&tid=15487600
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var countLine = 2;
var tokens = [];

rl.on('line',function(line){
    tokens.push(line); 
    if(countLine==tokens.length){
        //获取字符串arr1，允许移除的字符个数num
        var arr1 = tokens[0];
        var num = parseInt(tokens[1]);

        //预设一个对象，一个数组，和最后结果
        var json = {};
        var arr = [];
        var result = 0;
        
        //将字符串arr1中每个字符出现的个数存在对象json中
        for(var i = 0; i<arr1.length;i++){
            json[arr1[i]] = (json[arr1[i]] + 1) || 1;
        }
        //将对象值存入数组
        for(key in json){
            arr.push(json[key])
        }
        //从小到大排序
        arr.sort((a,b)=>(a-b));

        //数组最后一个的数每次-1后重排序
        for(var i = 0; i<num;i++){
            arr[arr.length-1]--;
            arr.sort((a,b)=>(a-b));
        }

        //遍历数组得结果
        arr.forEach(function(val){
            result += val*val;
        })
        console.log(result);
    }
    
});

