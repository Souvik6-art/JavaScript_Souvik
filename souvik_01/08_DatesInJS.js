//Dates
let mydate =new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let myDate1= new Date(2026,0,23) // dates month 0 se suru hote hai .. 0 mtlb january
console.log(myDate1.toDateString());

let myTimeStamp = Date.now() // ye hume current time ka timestamp dega
console.log(Math.floor(myTimeStamp/1000));// ye hume current time ka timestamp dega seconds me.. kyuki timestamp miliseconds me hota hai.
 console.log(mydate.getMonth()+1); // month 0 se suru hota hai
 console.log(mydate.toLocaleDateString('default',{weekday:'long'}));// ye hume current day ka name dega.. default se hume local language me day ka name milega.. aur weekday se hume day ka name milega.. agar hum month likhte to month ka name milta.
 