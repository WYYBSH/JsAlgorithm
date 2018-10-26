function* fun(x){
    yield x+1
    yield x+2
    yield x*x
}

for(let x of fun(10)){
    console.log(x)
}