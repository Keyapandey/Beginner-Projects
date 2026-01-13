// variable can modify as it was generally in js//
var a=10;
console.log(a)
a="Keya"
console.log(a)
// in constant value is assigned and cannot be modified 
const bb=5
console.log(b)


if(true){
    var a=10
    let b=20
    const c=30
}
console.log(a);                  //this will give ooutput because var ignores {} therefore sometimes gives bug which are hard to track so not used mostly//
console.log(b);                 //b and c will not work as they are inside the scope and won't give output outside the scope//  
console.log(c);

a=300                                  //global declaration of a//
if(true){
    var a=10                           //local declaration of a//
    let b=20
   console.log("INNER:",a);            
}
console.log(a);                  

//In browsers, var attaches to window, but in Node.js each file is a module, so variables are module-scoped and do not attach to global.//

