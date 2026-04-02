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

let str = "souvik"
let str1 = "Mondal"
let fullName = str + " " + str1
console.log(fullName)

console .log(1+"1") // 11
console.log(1+Number("1")) // 2
console.log("1"+1) // 11
console.log(1+ String(1)+5) // 115
console.log(1+5+String(1)) // 61
// Sring first me hai to sab string ke hisab se add hoga .. agar number first hai to pehle wala as number operation hoga.

console.log(+true) // 1
console.log(+false) // 0

let x=12
x++;
console.log(x) // 13
--x;
console.log(x) // 12