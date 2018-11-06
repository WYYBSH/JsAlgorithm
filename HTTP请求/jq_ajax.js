//$.ajax(jq的ajax请求)
$(document).ready(function () {
    const url = 'http://127.0.0.1:3000/profile'
    $('.btn_1').click(function () {
        $.ajax({
            url: url,
            type: "GET",
            success: function (result) {
                console.log(result)
            },
            error: function (error) {
                console.log(`Error ${error}`)
            }
        })
    })
})

//$.get
const url = 'http://127.0.0.1:3000/profile'
$('.btn_2').click(function () {
    $.get(url, function (data, result) {
        console.log(data)
    })
})

//$.post
const data = {
    name: "wyf"
}
$('.btn_3').click(function () {
    $.post(url, data, function (data, status) {
        console.log(`${data} and status is ${status}`)
    })
})

//$.getJson
$('.btn_4').click(function () {
    $.getJSON(url, function (result) {
        console.log(result)
    })
})

//注册json格式
var js_path = "http://192.168.1.180:8099"

function send_json() {

    var username = "hhh";
    var password = "111";

    if ((!username) || (!password)) {
        console.log("请输入完整信息");
    } else {
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
            success: function () {},    
            error: function () {}
        });
    }
}
//登陆 键值对格式
function login() {

    $.ajax({
        type: 'POST',
        url: js_path + "/login",
        dataType: 'json',
        data: {
            username: "user",
            password: "user"
        },
        success: function () {},
        complete: function () {},
        error: function () {}
    });
}
