// *************Functions************


function saymyname(){
console.log("Souvik Mondal")
}
saymyname // reference
saymyname() // execution
 
// function addTwoNums(num1, num2 ){  //num1 and num2 are parameters.. 
//     console.log(num1+num2);
    
// }

function addTwoNums(num1, num2 ){  //num1 and num2 are parameters.. 
//   const result= num1+num2
//   return result
    return num1+num2
}
//console.log(" the sum is: " + addTwoNums(55, 45)); // 55 and 45 are arguments

function isloggedIn(username){
    if(username != undefined){
    console.log(`${username} just Logged In`);
    }
    else {console.log("Plese enter valid User Name");
    }
}
 //isloggedIn(" Souvik ")
// ... this is rest operator also spread operator
 function calculateCartPrice(...num1){ //rest
return num1
 }
 console.log(calculateCartPrice(458,552,998));
  

 //creating an object and accessing it by the function...
 const myobject={
    username: "Souvik mondal",
    age: 23,
    location: "Kolkata"
 }
 function accessmyobject(anyobject){
    console.log(`The name is: ${anyobject.username} and the age is ${anyobject.age}`);
    
 }
 
  function allCartPrice(...num1){ 
    let sum=0
    for(let i=0; i<num1.length; i++){
        sum+=num1[i]
    }           
    return sum
  }
   // console.log(allCartPrice(458,552,998));
   
   
const mynewArray=[100,200,300,400,500]
function retuernSecondvalue(...referenceArray){  
    return referenceArray[1]
}
console.log(retuernSecondvalue(...mynewArray)); //spread operator

