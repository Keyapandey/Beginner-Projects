age=20
exp=0
const s=`My name is keya i am ${age} years old and my experience is ${exp}`
//rather than using ("my name is keya i am "+age+"yaers old and my expeience is"+exp)//

console.log(s)
console.log(s.toUpperCase())  
console.log(s.charAt(6))       //char at index//
console.log(s.indexOf('a'))    //index of char//

let b=s.substring(0,8)        //slicing but only +ve num//
console.log(b)

let a=s.slice(7,-5)
console.log(a)

let c="    keya    "
console.log(c);
console.log(c.trim());         //removes the extra sapces//

const url= "https://keya.com/keya%20pandey"
console.log(url.replace('%20','-'));          //replace with another variable in url//
console.log(url.includes('keya'));            // variable present or not output in bool//


console.log(s.split(' '))       //wrt to argument which can be symbol or just space the whole string can be converted into array//
