// https://www.nowcoder.com/questionTerminal/80c161d333ae41499bfde5f95a6af15a?source=relative
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line',function(line){
    var tokens = line.split(' ');
    var left = parseInt(tokens[0]);
    var right = parseInt(tokens[1]);
    var count = 0;

    //判断是否为回文数字串
    function isPalindromes(num){
        var numString = num.toString();
        var arr = numString.split("");
        var revArr = arr.reverse(); //数组反转
        var joinArray = revArr.join("");
        if(joinArray==num){
            return true;
        }
    }

    //判断是否为素数
    function isPrime(num){
        if(num<2){
            return false;
        }
        if(num===2){
            return true;
        }else if(num%2===0){
            return false;
        }

        var squareRoot = Math.sqrt(num);
        for(var i = 3;i<=squareRoot;i+=2){
            if(num%i===0){
                return false;
            }
        }
        return true;
    }

    

    for(var i = left;i<=right;i++){
        if(isPalindromes(i)&&isPrime(i)){
            count++
        }
        
    }
    console.log(count)

});