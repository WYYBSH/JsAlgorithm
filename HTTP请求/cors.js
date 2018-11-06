// 创建XHR 对象.
function createCORSRequest(method, url) {  
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // 不支持CORS.
      xhr = null;
    }
    return xhr;
  }
  
  // 辅助函数：解析响应内容中的title标签
  function getTitle(text) {  
    return text.match('<title>(.*)?</title>')[1];
  }
  
  // 发起CORS请求.
  function makeCorsRequest() {  
    // HTML5 Rocks支持 CORS.
    var url = 'http://updates.html5rocks.com';
  
    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
  
    // 响应处理.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert('Response from CORS request to ' + url + ': ' + title);
    };
  
    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };
  
    xhr.send();
  }