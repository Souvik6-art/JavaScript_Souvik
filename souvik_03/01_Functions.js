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
console.log(" the sum is: " + addTwoNums(55, 45)); // 55 and 45 are arguments

function isloggedIn(username){
    if(username != undefined){
    console.log(`${username} just Logged In`);
    }
    else {console.log("Plese enter valid User Name");
    }
}
 isloggedIn(" Souvik ")