 const name="Souvik" // string declaration
 const home ="Kolkata"
 console.log(name + home+" Hii")
 console.log(` Hello My name is ${name} and my home is at ${home} and want to say hii`)
const Stdname = new String('Souvik_Mondal') // aslo a string declaration 
console.log(Stdname[2]);// key value access
console.log(Stdname.length);
console.log(Stdname.toUpperCase());
console.log(Stdname.charAt(3));
console.log(Stdname.indexOf('k')); 

const new_Stdname= Stdname.substring(0,6)
console.log(new_Stdname);
 let MyStd= "    Arun Mondal    "
 console.log(MyStd);
 console.log(MyStd.trim()); // this method deletes the extra unwanted spaces in a string
 
 //replace method
 const myurl = "http//Souvik.mondal&2%20%20//kolkata//secv.com"
 let myurl1= myurl.replace('%20','**88**')
 console.log(myurl);
  console.log(myurl1);
 console.log(myurl.includes('Souvik'));
 
 //split
 console.log(Stdname.split('_'));
 
 

 
 



 