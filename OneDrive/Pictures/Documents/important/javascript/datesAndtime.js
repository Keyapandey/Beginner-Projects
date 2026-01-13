//++++++++++++++++++++ DATES +++++++++++++++++++++++//

let myDate = new Date()
console.log(myDate.toString());           //date and time in ist//
console.log(myDate.toDateString());      //only date in alphabets//
console.log(myDate.toISOString());       //date and time//
console.log(myDate.toJSON());            //same as isosstring//
console.log(myDate.toLocaleDateString()); //only date//
console.log(myDate.toLocaleString());     //date and time//
console.log(myDate.toLocaleTimeString()); //only time//

console.log(typeof myDate);                    //date is a object//
let mycreatedDate = new Date(2025, 0, 13);       //months are in index so 0 is jan//
console.log(mycreatedDate.toDateString());

let myTimeStamp = Date.now();                     //gives time in mili sec//
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));         //gives time in sec//
