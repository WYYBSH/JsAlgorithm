/****
 * 异步加载图片
 */
function loadImage(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image()

        image.onload = function () {
            resolve(image)
        }
        image.onerror = function () {
            reject(new Error('onload error'))
        }

        image.src = url
    })
}
/*****
 * promise对象实现ajax的操作
 */
const host = 'http://192.168.1.103:8099'
const url = host + '/creation/template/html/types/card'
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        const handler = function () {
            if (this.readyState !== 4) {
                return
            }
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }

        const client = new XMLHttpRequest()
        client.open("POST", url)
        client.onreadystatechange = handler
        client.responseType = "json"
        client.setRequestHeader("Accept", "application/json")
        client.setRequestHeader('authorization', tokenVal);
        client.send()
    })

    return promise
}

getJSON(url).then(function (json) {
    console.log(json)
}, function (error) {
    console.log(error)
})