//A singleton is an object that is created once and shared everywhere//
//An object is used to store related information together. First object literals//

const mysym=Symbol("key1")                           //always initialize symbol before using it//

const Jsuser = {
    name : "Keya",
    [mysym] : "mykey1",                              //symbol should always have square brackets else they will be considered string type//
    age : 18,
    Location : "Kolkata",
    emailID : "Keya@google.com",
    IsLoggedin : false
}                                                    //this is how a object is initialized//
console.log(Jsuser.name);                            //access objects//
console.log(Jsuser["name"]);                        //this access way should be used when keys are in string or in symbol//
console.log(Jsuser[mysym]);                          //in symbol to access and to initialize use []//

Jsuser.Location = "London"                            //we can change values like this//
// Object.freeze(Jsuser)                                //this will freeze the object and won't allow further modifications//
console.log(Jsuser);

Jsuser.greeting= function() {
    console.log("Hello, JS user");
}
Jsuser.greeting2= function() {
    console.log(`Hello JS user,${this.name}`);     //using "this" is used to refer to the current object that is calling the function.used in case of huge datas//
}
Jsuser.greeting();                                 //using console.log here will give undefined because we are not returning naything in function//
Jsuser.greeting2();




const regularUser = {
    emailID:"abc@google.com",
    username: {
        fullname:{
            firstname: "Keya",
            lastname: "pandey"
        }
    }

}
console.log(regularUser.username.fullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3= Object.assign({},obj1,obj2)          //assign has(target,source) so putting {} ensures all the values are going in empty target else no need//
obj3={...obj1,...obj2}
console.log(obj3);

const tinderuser = new Object()                 //this is a singleton object//
const tinderUser = {}                           //this is a non singelton object//

tinderuser.ID ="123abc"
tinderuser.name ="Keya"
tinderuser.IsLoggedin=false
console.log(tinderuser);
console.log(Object.keys(tinderuser));                   //only keys will be printed in array//
console.log(Object.values(tinderuser));                 //only values will be printed in array//
console.log(Object.entries(tinderuser));                //each key and value will be in single arrays//
console.log(Object.hasOwn('IsLoggedin'));               //checks if the key is available and gives bool output//

const course={
    courseInstructor: "Keya",
    coursePrice: 999,
    courseName: "javascript",
}
const {courseInstructor: Instructor}= course                //rather than writing course.couurseinstructor and  making teh code messy we can do this then only we need to use the keys not the object together//
console.log(Instructor);