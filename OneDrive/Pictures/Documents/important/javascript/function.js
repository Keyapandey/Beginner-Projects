function saymyname(){
    console.log("K");
    console.log("E");
    console.log("Y");
    console.log("A");
}                                    //function initialization//
saymyname()                          //calling function//

function addtwonum(num1,num2){        //parameters during initialization//
    console.log(num1+num2);
}
addtwonum(5,6)                        //arguments during calling//

function addtwonum(num1,num2){        
    return num1 + num2;               //using return at place of consolelog//
}
const result=addtwonum(5,6)  
console.log("Result is ",result);     //conosle here in imp because we rare returning the function but not printing//

function loginuser(username){
    return `${username} just logged in`          //string manipulation// 
}
console.log(loginuser("Keya"));

//in case of one parameter if we pass multiple arguments then use '...' rest operator to take all the arguments in array//
function calculatecartprice(...num1){
       return num1
}
console.log(calculatecartprice(200,400,500));

function calculatecartprice(val1,val2,...num1){    //in this case first 2 values will be occupied by val1 and val2 rest in array//
       return num1
}
console.log(calculatecartprice(200,400,500));

function anyobject(aobject){
       console.log(`Username is ${aobject.name} and price is ${aobject.price}`);
       
}
anyobject({
    name: "keya",
    price: 499
})                                                               // this is passing and object in fucntion you acn declare teh fucntion earlier as well as later//

// /*addone(5)*/ -> allowed//
function addone(num){                                 //here the function can be called before initialization//
    return num + 1
}
addone(5)

// addtwo(4) -> not allowed in this declaration//
const addtwo =function(num){                           //this is also a way to initialize function it which the variable holds it and the function can only be called after initialization//
    return num + 2
}
addtwo(4)