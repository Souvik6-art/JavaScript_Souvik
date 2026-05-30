const myObj = {
    "Name" : "Souvik Mondal",
"Hobby" : "Painting",
"Vill" : "Anur",
"Clg" : "SNU"
}
 // for in LOOP
for (const key in myObj) {
    console.log(`${key}  :-  ${myObj[key]}`);    
}

// for each LOOP... it doesnt return values

 const language= ["bengali", "Hindi", "english", "Bhojpuri", "Marwadi" , "Santali"]
 language.forEach(function (item){
    console.log(item);
     })

     // USing Arrow Function 
     language.forEach((item)=> {console.log(item);  })