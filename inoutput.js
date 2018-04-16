//获取单行输入的值
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',function(line){
    var tokens = line.split(' ');
    console.log(parseInt(tokens[0])+parseInt(tokens[1]));
});

//获取多行输入的值
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
        //开始逻辑处理
        console.log(tokens);
    }
    
});

