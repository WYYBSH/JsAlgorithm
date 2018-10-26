var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var num = -1;
var tokens = [];

rl.on('line',function(line){

    if( num<0 ){
        num = parseInt(line.split(' ')[0])
        console.log(num)
    }else{
        tokens.push(line)
        if(num==tokens.length-1){
            //开始逻辑处理
            console.log(tokens)
        }
    }
    
});