//注册json格式
function send_json(){
    var request;
    var name = "ddd";
    var password = "234"
    var param = {
        "username": name,
        "password": password
    }
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }  
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            if (request.status === 200) {
                console.log(request.responseText)
            } else {
                console.log("no")
            }
        }
    }   
    request.open('POST','http://192.168.1.180:8099/user/register');
    request.setRequestHeader('content-type', 'application/json',true);
    request.send(JSON.stringify(param));   
    console.log('请求已经发送，正在等待响应...')
}
//登陆 键值对格式
function login(){
    var request;
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
   
    var param = {
        username: username,
        password: password
    }
    if(typeof param == 'object'){
        var str = '';
        for(var key in param){
            str += key+'='+param[key]+'&';
        }
        param = str.replace(/&$/, '');
    }
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');
    }  
    request.onreadystatechange = function(){
        if(request.readyState == 4){
            if (request.status === 200) {
                console.loh("yes")
            } else {
               
                console.log(request.status)
            }
        }
    }   
    request.open('POST','http://192.168.1.180:8099/login');
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    request.send(param);   
    console.log('请求已经发送，正在等待响应...')
}