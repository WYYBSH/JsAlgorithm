const url = 'http://127.0.0.1:3000/profile/'
const data = {
    name: "www"
}
const otherParam = {
    headers: {"content-type":"application/json; charset=UTF-8"},
    data: data,
    methods: "POST"
}

fetch(url,otherParam)
.then(data => {return data.json()})
.then(res => {console.log(res)})
.then(error=>console.log(error))