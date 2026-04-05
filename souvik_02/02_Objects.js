// //objects ko declare karneka 2 tareeka h ek literal k tarha aur ek constructor ki tarhaa
// Singleton .. literals k tarha use karne pe Singleton nhi banta
//Object.create  //Constructor method,, yaha singleton bante h 

 //SYMBOL
    const sym1 = Symbol("id");

// Object Literals
 const js_user={
name: "Souvik",
[sym1]: 2311200001262, ///symbol ko as a key use karne ke liye square bracket ka use karna padta h
age: 25,
location: "Kolkata",
email: "souvik@example.com",
isLoggedIn: true,
"Mother": "Pintu Mondal",
lastLoginDays: ["Monday", "Tuesday", "Wednesday"]
 }
 console.log(js_user.age)
 console.log(js_user["Mother"])
console.log(typeof js_user.sym1); // String
//but
console.log(typeof (js_user[sym1])); // Symbol

//Value Freezeing 
/*
Object.freeze(js_user); // freeze the object
js_user.email = "jihfiwufhiuhfquf"
console.log(js_user.email); // email is not changed because it is frozen


// to freeze one property of the object
Object.defineProperty(js_user, "email", {writable: false}); // make email property read-only
js_user.email = "jihfiwufhiuhfquf"
console.log(js_user.email); // email is not changed because it is read-only
console.log(js_user);
*/

//function 
js_user.greeting= function(){
    console.log(`Hello , my name is ${this.name}, my age is ${this.age},  and I am from ${this.location}`);
}
js_user.greeting();




