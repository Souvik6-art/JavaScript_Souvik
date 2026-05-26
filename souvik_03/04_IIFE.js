//IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function greet(){ //named IIFE
    console.log("Hello World");
})();
//(Function definition)  (this is Execution Call)
// this is used to avoid the pollution of the global scope. because when we declare a variable or a function in
//  the global scope it can be accessed and modified by any other code in the program. but when we use an IIFE it 
// creates a new scope for the variables and functions declared inside it. so they cannot be accessed or modified 
// by any other code in the program. this is also known as encapsulation.

((name)=>{
    console.log(`Hello ${name}`);
})('Souvik Mondal');

