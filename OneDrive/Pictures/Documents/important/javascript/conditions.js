//if else condition//
a=5;
b=5;
if(a==b) console.log('a and b are equal')
    else console.log('a and b are not equal')

//else if condition//
x=18;
if(x>18) console.log(Adult)
    else if(x==18)  console.log('apply for voter id')
else console.log(Child)

//===//
// === checks the type and value both to give true and false//

a=5
b='5'
if(a===b) console.log('equal')
    else console.log('not equal')

a=5
b='5'
if(a==b) console.log('equal')
    else console.log('not equal')


// use of if-else in js//

const userLoggedIn= true
const debitCard=true
const loggedInGoogle= false
const loggedInemail= true

if (userLoggedIn && debitCard) {                          //in & all the conditions should be true to give output//
    console.log("Allowed to buy course"); 
}

if(loggedInGoogle || loggedInemail){                      //in || one at least one condition should be true//
    console.log("User Logged in");
    
}


// use of switch in javascript//

const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febraury");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("None");
        
        break;
}