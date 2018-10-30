var js_path = "http://192.168.1.180:8099"
//注册json格式
function send_json(){
					
    var username = "hhh";
    var password = "111";
    
    if((!username)||(!password)){
        console.log("请输入完整信息");
    }else{
        $.ajax({
            type: 'POST',
            url: js_path + "/user/register",
            async: false,
            dataType: 'json',
            contentType: "application/json",
            data: JSON.stringify({
            'username': username,
            'password': password
            }),	
            success: function (data) {     //一些注册提示
                if(data.status == 200){
                    console.log("yes");
                }                           
            },
            error: function(data){
                console.log(data);
            }
        });
    }
}
//登陆 键值对格式
function login(){ 
   
    $.ajax({
        type: 'POST',
        url: js_path + "/login",
        dataType: 'json',
        data: {            
            username: "user",
            password: "user"           
        },	
        success: function (data) {     //一些注册提示
            if(data.status === 302){
                console.log("302")
                location.href = data.location;
            }                           
        },
        complete: function(jqXHR){
            console.log(jqXHR.status);
        },
        error: function(xhr){
            console.log(xhr.status);
        }
    });
}
