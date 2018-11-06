var image = new Image();

//上传服务器
window.addEventListener("DOMContentLoaded", function () {

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = { "video": true },
        errBack = function (error) {
            console.log("Video capture error: ", error.code);
        };
    //navigator.getUserMedia这个写法在Opera中好像是navigator.getUserMedianow
    if (navigator.getUserMedia) {
        navigator.getUserMedia(videoObj, function (stream) {
            video.srcObject = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) {
        navigator.webkitGetUserMedia(videoObj, function (stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    setInterval(function () {
        context.drawImage(video, 0, 0, 100, 100);
        image.src = canvas.toDataURL("image/png");
    }, 3000)

    $("#bu_login").click(function () {
        var username = $("#inpt_mobile").val();
        $.ajax({
            type: "POST",
            url: "http://192.168.1.180:8000/login",
            async: true,
            contentType: "application/json", //the datatype of mime
            data: JSON.stringify(
                {
                    "loginType": "face",
                    "username": username,
                    "loginParam": image.src.split(",")[1]
                }
            ),
            datatype: "json",
            success: function (data) {
                if (data.status === 200) {
                    // timer.siv.forEach(function (siv) { clearInterval(siv) });
                    alert("登陆成功")
                    $(location).attr('href', '#.html')
                } else if (data.data.status === 400) {
                    alert("请求失败")
                }
            },
            error: function () {
                //请求出错处理
            }
        });
    })

})



