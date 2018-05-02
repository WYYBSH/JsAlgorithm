// https://www.nowcoder.com/questionTerminal/bf877f837467488692be703735db84e6

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
        var arr1 = tokens[0].split(' ');
        var arr2 = tokens[1].split(' ');

        var n = parseInt(arr1[0]);
        var w = parseInt(arr1[1]);

        arr2.sort((a,b)=>(a-b));

        var total = 0;
        var count = 0;

        for(var i = 0;i < n; i++){
            total += parseInt(arr2[i]);  
            if(total<w){
                count++;
            }
            
            while(total>w){
                break;
            }
        }

        console.log(Math.pow(2,count))

    }
    
});

