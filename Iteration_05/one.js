// For 
const arr= [1,2,7,5,33,12,85,47,65,32,45,77]
for (let index = 1 ; index <= arr.length; index++ ){
   // console.log("Hello  "+ index);
    if (index == 5){
        //console.log( "5 baan gye vaai  ");
        
    }
}
//console.log(arr.length);

 /******** LOOP inside LOOP */

 /*
for (let index =12; index<19 ; index++){
    console.log(`For the  value : ${index} `);
        for (let index1 =1; index1<=10 ; index1++){
       // console.log(`inner Loop value: ${index1}`);
        console.log( index+ '* '+ index1 + '= '+ index*index1);
        
    }
}
*/



 let myArray =["Souvik", "Arun", "Pintu", "Mondal", "Rahul"]
 for (let i=0; i<myArray.length; i++){
    //console.log(myArray[i]);
    
 }
  /* *** REVERSE ARRAY********/
 for(i=myArray.length-1 ; i>=0; i--){
       //console.log(myArray[i]);
        }

//** BREAK STATEMENT ** */
   for (let i= 1 ; i<=20; i++){
           // console.log(`Value of index is ${i}`);
    if(i==5){            
       // console.log( "5 detected bro");
        break; 
            }
            
   }
   /****** CONTINUE STATEMENT********/
   // KONO AKTA CONDITION EKBARER JONNE SKIP HOBE JUST 
     
   for (let i=0; i<=20 ;i++){
    if (i== 5){
        console.log("5 detected ");
        continue         
    }
    console.log(`value of the index is ${i}`);
       } // just skipped the 5th index 