//fetch现在感觉需要各种封装使用，现在不打算主要使用这种
function fc() {
  fetch('http://127.0.0.1:3000/posts')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log("Oops, error", e))
}

//fetch_post
function fc_post() {
  const link = 'http://127.0.0.1:3000/posts'
  const data = {
    id: 1,
    title: 'emmmmm',
    author: 'wyyyyyy'
  }
  const otherPram = {
    headers: new Headers({
      "content-type": "application/json"
    }),
    credentials: 'include',
    body:JSON.stringify(data),
    method: "POST"
  }
  fetch(link, otherPram)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
}
