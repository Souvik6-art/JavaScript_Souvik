// we assume the true value
const useremail = []

if (useremail){
    console.log("got the user email id");
}else{
    console.log(" dont have the user email id ");

    
}

// ********falsy values ******************
// false, 0, -0, BigInt 0n , empty string "" , null, undefined, NaN

//  **********Truthy Values***********
// empty array [] ,"0" , `false` , spaced string " "  , empty object {} , function(){} , 

if (useremail.length === 0){
    console.log("Array is empty ");
    }

    const emptyObj= {}
if(Object.keys(emptyObj).length === 0){
    console.log( " Object is Empty ");     
}

 //Nullish Coalescing Operator (?? : Null Undefined
  let  val1;
  val1 = 18 ?? 20 
  console.log(val1);

  let val2= null ?? 6
  console.log(val2);
  
  let val3= undefined ?? 15
  console.log(val3);
  
  let val4= null ?? undefined ?? 10 ?? 20
  console.log(val4);
  

  // Ternary Operator
   const icePrice = 50;
   icePrice >=30 ?  console.log(`${icePrice} is Expensive `): console.log(`${icePrice} is not expensive`);
   
   
   