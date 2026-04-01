let score= "556"
 console.log(typeof score);
 // console.log(typeof (score));

  let number = Number(score) // number mein convert hua
  console.log(typeof number)
  console.log(number)

  //USING WITH STRING VALUES
  let myage= 23
  console.log("My age is a " +typeof myage)
  let mynewage= String(myage) // String mein convert hua

  console.log(" My age is now a "+ typeof mynewage)

//USING WITH BOOLEAN
let is_tall=""
let is_tall1= Boolean(is_tall);
console.log(is_tall1)
// 0 or empty String => false
//1 or valued string => true