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


  // 2nd Promise .....
new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Hello EveryOne");
       resolve() 
}, 1000)
    }).then(function(){
        console.log("Hello EveryOne 2");
        
    })
    


    // third Promise style...
   const PromiseThree = new  Promise(function(resolve, reject){
setTimeout (function(){
    resolve({UserName:"Souvik", Email:"Souvik@gmail.com", Age:"23"})
},1000)
    })
    PromiseThree.then(function(userDetails){
console.log(userDetails);

    })

let a=5;
let b=10;

    const Promisethree01 = new Promise(function(resolve, reject){
        setTimeout(function(){
        
            resolve(a+b)
        },100)
    })
    Promisethree01.then(
        function(result){
    console.log(result);
        }
    );

    // Fourth Promise Style....
    promisefour = new Promise(function(resolve, reject){
setTimeout(function(){
    let error= false;
    if(!error){resolve({Username:"Souvik", UserEmail:"Souvik.mondal@gmail.com", userAge:"23", userPassword:"1235"})
        }else{reject('ERROR: Something Went Wrong')}
},1000)

    })

    promisefour.then((user) =>{
        console.log(user);
         return user.Username
    }).then((username)=>{console.log(username);
            }).catch(function(error){console.log(error);
            }).finally(()=> console.log("Finally all solved") )



            // Promise five ...
            const Promisefive = new Promise(function(resolve, reject){
               
                setTimeout(function(){
let error =true;
if(!error){ resolve({Username:"Souvik", UserEmail:"Souvik.mondal@gmail.com", userAge:"23", userPassword:"1235"})}
else{ reject('ERROR: JS went wrong')}
                },1000)

            })
    async function consumePromiseFive() {
      
      try {
        const response =  await Promisefive
      console.log(response);
      } catch (error) {
        console.log(error);
        
      } 

    }
    consumePromiseFive()