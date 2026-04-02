// Primitive Data Types in JavaScript are
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt


// Non-Primitive/ Reference Data Types are
// 1. Object
// 2. Array
// 3. Function

const myId = Symbol('666')
const myId1 = Symbol('666')
console.log(myId === myId1) // false ... because symbol is unique and immutable data type

const bigInt1 = 129955354654354645465465n
const bigInt2 = 129955354654354645465465n
console.log(bigInt1 ===bigInt2) // true ... because bigInt is a primitive data type and it is immutable
 
//Arrays
const names= ["souvik", "mondal", "Arun", "Pintu"]
 console.log(names)

//Objects
let objects= {
    name: "souvik",
    age: 23,
    city: "kolkata"
} 
console.log(objects)
    console.log(objects.name) // only name property will be printed

function myFunction(){
    console.log("This is a function")
}

// to print data type of a variable 
 console.log(typeof myFunction) // function
 console.log(typeof names) // object 
 console.log(typeof objects.city) // string
 
console.log(myFunction()) // function wo print v karega aur undefined v print karega because return data type mentained nehi kiya hai
console.log(typeof bigInt1) // bigint