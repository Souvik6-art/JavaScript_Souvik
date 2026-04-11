
//when {} comes after object it is called as object literal and when it comes after function it is called as Scopes
   if(true){
    let a=10
const b=20
//var c=30
}
//console.log(a); // it will give error because a is declared by let and it is block scope
//console.log(b); // it will give error because b is declared by const and it is block scope
//console.log(c); // it will give 30 because c is declared by var and it is function scope
//thats why we should avoid var and use let and const because it will give us error if we try to access the variable outside the block scope and it will help us to avoid bugs in our code.


//****************************NESTED SCOPES*************************************** */
function one (){
const myName= "Souvik" 
function two(){
const webname= "Mondal.66"
console.log(myName); //two can access myName because it is in the outer scope of two

}
//console.log(webname); //one cannot access webname because it is in the inner scope of two

two()
}
//one()

if (true){
    const myName1= "Souvik"
    if(myName1 == "Souvik"){
    const webname1= " Mondal.sm6"
    console.log(myName1 + webname1); 

    }
  //  console.log(webname1);//it will not be accessed
}
//console.log(myName1);
 