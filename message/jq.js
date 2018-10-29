function register_fun(){
					
    var data = $('form');
    var username = data.find('#adminName').val();
    var password = data.find('#psw').val();
    var js_path = "http://192.168.1.180:8099"
       
    if((!username)||(!username)){
        console.log("请输入完整信息");
    }else{
        $.ajax({
            type: 'POST',
            url: js_path + "/user/register",
            async: false,
            dataType: 'json',
            contentType: "application/json",
            data: {
            'username': 'username',
            'password': 'password'
            },	
            // headers: { 'api-key':'myKey' },
            success: function (data) {     //一些注册提示
                if(data.status == 200){
                    console.log(data);
                }                           
            },
            error: function(data){
                console.log(data);
            }
        });
    }
}