const myNumbers= [1,5,8,7,1,58,9,6,44,5,11,33,88,95,66,74,77]

//FOR each loop
let addten= []
myNumbers.forEach((item)=> addten.push(item+10))
//console.log(addten);

//Map 
const newNums =myNumbers.map((num)=>num+10)
console.log(newNums);

//Multiple maps
const newNums1= myNumber s
                        .map((item)=> item*10 )
                        .map((item)=> item+5)
                        .map((item)=> item*2).filter((item)=>item > 1500) 
                        console.log(newNums1);
                        
