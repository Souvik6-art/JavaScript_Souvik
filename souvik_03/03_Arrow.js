const user={
    userName:"Souvik",
    age: 22,
   welcomeMessage : function(){
      console.log("hello Welcome to "+ this.userName +"Details" + "Whose age is " + this.age );
 //console.log(this);//this will print the user object because we are using this keyword inside the welcomeMessage function which is a method of the user object.
   }
  }
user.welcomeMessage(); 
//when we use current conrext in a function we use this keyword to access the properties of the object. In this case we are using this.userName and this.age to access the userName and age properties of the user object.
user.userName="Arun ";
user.welcomeMessage();
// there is a global object in JavaScript called window. browser ke andar jo bhi global variable hote hai wo window object ke andar store hote hai. isliye jab hum this keyword ka use karte hai to wo window object ko refer karta hai. 
// isliye jab hum this.userName karte hai to wo window.userName ko refer karta hai. isliye jab hum user.userName="Arun " karte hai to wo window.userName ko update kar deta hai.
//  isliye jab hum user.welcomeMessage() karte hai to wo "hello Welcome to Arun Details Whose age is 22" print karta hai.



function Mondal(){
   let UserName ="Pintu Mondal"
      console.log(this.UserName);
}// this keyword only works in regular functions and not in arrow functions. because arrow functions do not have their own this keyword. they inherit the this keyword from the parent scope. in this case the parent scope is the global scope. so when we call the Mondal function it will print undefined because there is no UserName variable in the global scope.
// here only object ke andar kaam kar rahe hai 
 Mondal(); // it will print Undefined



 const mondal= function(){
      let UserName ="Pintu Mondal"
      console.log(this.UserName);
 }
   mondal(); //this also will  print Undefined 


    //**************************ARROW FUNCTION********************************* */


    const mondalArrow = () => {
      let UserName ="Pintu Mondal"
      console.log(this.UserName);
 }
 mondalArrow();