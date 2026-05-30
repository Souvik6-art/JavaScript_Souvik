//for of
//   ["", "", ""]string inside array
// [{},{},{}]  object inside array
const arr=[1,5,8,6,7,22]
for (const val of arr) {
    console.log(val);
}

let str= ["souvik ", "Mondal", "Anur","Dokanipara", "Hooghly", "West Bengal"]
for (const num of str) {
    console.log(str);
        break 
}
 /*******  for of LOOP   ******/
let str1="Souvik Mondal"
for (const alphabet of str1) {
    if(str1.indexOf(alphabet)==1){
    console.log(`${str1.indexOf(alphabet)} st alphabet is `+ alphabet);  
}else if(str1.indexOf(alphabet)==2){ console.log(`${str1.indexOf(alphabet)} nd alphabet is `+ alphabet); }
else if(str1.indexOf(alphabet)==3){ console.log(`${str1.indexOf(alphabet)} rd alphabet is `+ alphabet); }
else{ console.log(`${str1.indexOf(alphabet)} th alphabet is `+ alphabet);  }
}

/*************  MAPs   ****** */ //is a object that holds key value pair
 // MAP is not iteratable...
 
const map =new Map()
map .set("IN", "India")
map.set('USA',"United States Of America ")
map.set('FR', "France")
map.set('BAN', "Bangla desh")
map.set('CHN',"China")
//console.log(map);  //main 
// or
for (const [key, value] of map) {
    console.log(key ," :- ", value );
    
}
