//array

const myArr = [0,1,2,3,4,5]
console.log("A  "+myArr);

console.log(typeof myArr); // array is a object in js
 
const myArr2 = new Array(10,20,30,40,50)
console.log(myArr2[3]);

myArr.push(6) // add element at the end of the array
console.log(myArr);
myArr.pop() // remove element from the end of the array
console.log(myArr);
myArr.unshift(0) // add element at the beginning of the array
console.log(myArr);
myArr.shift() // remove element from the beginning of the array
console.log(myArr);

console.log(myArr.includes(5));
console.log(myArr.indexOf(3));
console.log(myArr.length);

//concat, join
const myArr3 = myArr.concat(myArr2) // merge two arrays
console.log(myArr3);
 
const myArr4 = myArr.join()
console.log(typeof(myArr4)); // convert array to string
 
//Slice and Splice

const myn1= myArr.slice(1,3) // slice(start,end) end is exclusive
console.log(myn1);

const myn2 = myArr.splice(0,3) // splice(start,count) count is number of elements to remove
console.log(myn2);
console.log(myArr); // original array is modified by splice


