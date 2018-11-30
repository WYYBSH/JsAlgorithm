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