const user ={
    username: "keya",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`);   //this is for current context to use anything in this object we can refer to this//
    }
}

user.welcomemsg()
user.username="sam"
user.welcomemsg()                                             


let addTwo = (num1,num2) => {                                  //initialization of arrow function just remove the name of fucntion and do this//
    return num1+num2
}                                                             //if curly barces is used then return should be there in arrow function but not in cases of first bracket//
console.log(addTwo(1,2))                                     //this will giev undefined because this doesn't work in function//
 

const adtwo = (n1,n2) => (n1+n2)                            //other way of initializing arrow function//
console.log(adtwo(1,2))
  
//for using objects in arrow function use curly barces inside first braces//
//difference of this in normal and arrow fucntion is that 'this' won't work inside arrow function or obj it will only work inside a normal function or arrow in normal fucntion//
//arow function were created so taht 'this' can be used there so no risk of losing context becuase arrow will not own 'this'it'll come from surrounding scope//



//+++++++++++++++++++++++++++++++++++++++++++++++IIFE+++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// IIFE stands for "Immediately invoked function expression" - it is used to create a private scope for the fucntion and to avoid global pollution as well as for immediate run of fucntion after it is defined.
//                                                             - it was used earlier in case of var because possibility of leakage was there but since invention of let and const it's not used mostly 

;((name) => {                                                                      //initaialization of iife better to start with ; to ensure the above codes are executed then only iife will run//
    console.log(`Connected with ${name}`);
})("keya");                                                                        /*imp ';' to make sure the seconf iife runs*/     //using parameters and arguments inside iife//

       //in case of initializing two iife one must use";" to make sure the first iife ends running else it'll always show error//

(function abd(){                                                                   //this is named iife//
    console.log(`connected`);
})();
