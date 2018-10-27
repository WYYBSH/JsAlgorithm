function success(text) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = text;
}

function fail(code) {
    var textarea = document.getElementById('test-response-text');
    textarea.value = 'Error code: ' + code;
}

var request = XMLHttpRequest();
// var request;
// if (window.XMLHttpRequest) {
//     request = new XMLHttpRequest();
// } else {
//     request = new ActiveXObject('Microsoft.XMLHTTP');
// }

request.onreadystatechange = function(){
    if(request.readyState == 4){
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    }
}

request.open('GET','/api/categories');
request.send();

alert('请求已经发送，正在等待响应...')