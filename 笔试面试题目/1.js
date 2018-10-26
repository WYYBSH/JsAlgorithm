getUrl(url,key){
    var result = {}
    url.replace(/\?(\w+)=(\w+)&?/,function(match,p1,p2){
        if(result[p1]!==void 0){
            var t = result[p1]
            result[p1]=[].concat(p1,p2)
        }else{
            result[p1]=p2
        }
        if(key === void 0){
            return result
        }else{
            return result[key] || ''
        }
    })
}


var url = "?key=1&key=2&key=3&test=4#hehe"
console.log(getUrl(url,"test"))

getUrl(){

}