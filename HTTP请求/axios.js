//get请求
function get(){
    const url = 'http://127.0.0.1:3000/posts'
    axios.get(url,{
        params: {
            id: 1
        }
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
}

//post请求
function post(){
    const url = 'http://127.0.0.1:3000/posts'
    const data = {
        id: '3',
        title: 'ddd',
        author: 'hhh'
    }
    axios.post(url,data)
    .then(function(res){
        console.log(res)
    })
    .then(function(err){
        console.log(err)
    })
}