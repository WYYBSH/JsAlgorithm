// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组

function getUrlParam(sUrl,sKey){
    var result = {};
    sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){//a，模式的匹配项；k，第一个捕获组的匹配项；v，第二个捕获组的匹配项
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
    });
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}

var url = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe"
var a = getUrlParam(url,"test")
console.log(a)

//通过采用void 0取undefined比采用字面上的undefined更靠谱更安全，应该优先采用void 0这种方式