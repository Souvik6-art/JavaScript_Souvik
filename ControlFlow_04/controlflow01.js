//if 
if(true){
 console.log(5);
     } 


const score = 95;
if(score > 90){
    const grade =`A`;
    console.log(`your grade is ${grade}`);
} 
  
// NESTING OF IF STATEMENT
const balance = 100;
if(balance < 500){
    console.log("your balance is low you cannot withdraw it by card or cheque"); ");
} else if(balance < 750){
    console.log("your balance is moderate you can not withdraw it by card ");
} else if( balance > 850){
    console.log("you can withdraw it by card ");
    }
    else if(balance >950){
        console.log( " your balance is eligible for check transaction");
            }

            const userLoggedIn = true;
            const userDebitCard = true;
            if(userLoggedIn && userDebitCard){
                console.log("you can shop online ");
                            }