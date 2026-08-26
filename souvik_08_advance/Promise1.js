//promise has three states .. pending rejected fulfilled.. and we have to consume and create the promises
// promise has a function .. wiith two parts 1. resolve and 2 . reject
const PromiseOne = new Promise(function(resolve, reject) {
// do an async task
// DB calls, cryptography, 
setTimeout(function(){console.log("hello");
},1000);
resolve()
})

PromiseOne.then(function(){
    console.log("Promises consumed");
    
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Hello EveryOne");
       resolve() 
}, 1000)
    }).then(function(){
        console.log("Hello EveryOne 2");
        
    })
    