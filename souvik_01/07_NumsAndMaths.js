const score= 100
   
const balance = new Number (152040.8556)
console.log(balance);
 console.log(balance.toFixed(2)); // 2 decimal number taak print hoga...
 
const myBalance = new String(1000)
console.log(myBalance);

console.log(balance.toString());
console.log(typeof(balance));

console.log(balance.toPrecision(6)); // precision value
console.log(balance.toLocaleString()); // local easy representation
 
//****************************Maths**************************** */

console.log(Math);

console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.26));
console.log(Math.ceil(4.2)); //yaha upar wale value lega .. matlab 4m se jada v bada hua to 5 legaa
console.log(Math.floor(4.8)); // 4 see bada v hua to 4 hi legaa.

//Array k andar koi min or max value print karane k liye
console.log(Math.min(4,8,2,7,6,22,));
let sm= [4,88,77,141,25,55,65,74,323,14]
console.log(Math.min(...sm)); //... just open the aray like a box  and put out the numbers.
console.log(Math.max(...sm)); 

//math.random operation
console.log(Math.random()); // always gives value between 0 and 1
console.log((Math.random()*10)+1);
 const min=10
 const max=20
 console.log(Math.floor(Math.random()* (max-min +1))+min);
 






