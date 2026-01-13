// falsy values-> null,NaN,0,undefined,false condition,false,-0,BigInt (0n),"empty string"//
//truthy values->"0",'false',"_",[],{},function(){},everything except falsy values//

if(true)
    console.log('hello')

else console.log('bye')

if(false)
     console.log('hello')

else console.log('bye')

//nullish coalescing operator (??): null undefined//
//in simple words, if the value is null or undefined use the other value as backup//

let val1;
val1=5 ?? 10
console.log(val1);

//terniary operator -> condition ? true : false//
//in simple words, if condition is true then use this(true) else use that(false)//

const price =100
price >=80 ? console.log("less than 80") : console.log("more than 80");







