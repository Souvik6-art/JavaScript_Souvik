// Objects Singletons

//const tinder_User= new Object(); 
 const tinder_User= {} // also a format to declare an object

tinder_User.name= "Souvik";
tinder_User.ID= 2311200001262;
tinder_User.age= 25;
tinder_User.location= "Kolkata";
//console.log(tinder_User);

const regularUser= {
    email:"tinderUser.User@gmail.com",
    fullName: {
        userFullname:{
            firstName: "Souvik",
            lastName: "Mondal"
        }
    }
}
//console.log(regularUser.fullName);
//console.log(regularUser.fullName.userFullname.firstName);

//......Combining Objects.......
const obj1= {1:"Pintu ", 2:"Mondal"}
const obj2= {3:"Arun", 4:"Mondal"} // yaha keys should be different otherwise it will override the previous key value pair then it will only show the last key value pair that is 3:"Arun", 4:"Mondal" and       1:"Pintu ", 2:"Mondal" will be overridden
//const obj_Assign= Object.assign(obj1,obj2); //Assigning only
//console.log(obj_Assign);
const obj3={...obj1,...obj2}
//console.log(obj3);

// Assigning many objects together into an arraqy
const user_array=[]
user_array.push(obj1,obj2)
//console.log(user_array);

//********************Destructuring***********************
 
const course ={
    course_name : "Js Hindi",
course_Price: "2000",
course_Mentor: "coursera"
}

const {course_Mentor}= course
console.log(course_Mentor);
 // we can also destructure the arrays

// *****************JSON****************

//  {
// "name": "Souvik",
// "coursename" : "Js in Hindi",
// "price": "5000"
//  }
 


