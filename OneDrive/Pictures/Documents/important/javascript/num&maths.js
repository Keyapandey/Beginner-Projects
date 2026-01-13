let a=4
let b=7

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%b)

//num and maths operations//

const score=400
console.log(score);  //a primitive number//

const balance = new Number(100)  //creates a number object because of wrapper around number//
console.log(balance);

console.log(balance.toString().length);   //converts the balance to string and finds the length of string//
console.log(balance.toFixed(2));          //decides how many decimal number to store after number//

const num=30.456
console.log(num.toPrecision(3));      //decides upto how many numbers the output will show precise value wrt to value in wrapper//

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));      //converts huge numbers into indian number system to easy to understand in default it is us based//


//++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));        //changes the -ve sign to +ve//
console.log(Math.round(4.6));    //rounds off the number//
console.log(Math.ceil(4.2));     //checks the upper number//
console.log(Math.floor(4.9));    //gives the lower number//
console.log(Math.max(4,5,9,7));  //gives the max among all//

console.log(Math.random());      //output always between 0 and 1 mostly decimal//
console.log(Math.random()*10);   //increases the range upto 0-9//
console.log((Math.random()*10) + 1);  //to avoid the 0//


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) + min);   //to generate output between max and min without decimals & max-min for the range//
