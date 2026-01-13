arr=[1,2,3,4,5,6,7,8,9,10]
 console.log(arr)
for(i=0;i<=10;i++)
    console.log(arr[i])

//copies in array of js are shallow copies and not deep copies//

n=arr.length
console.log(n)
console.log(arr[4])

arr.push(11) //add at last//
console.log(arr)

arr.pop()  //remove form last//
console.log(arr)

arr.unshift(0) //insert at first//
console.log(arr)

arr.shift()  // removes first element//
console.log(arr)

console.log(arr.includes(4));   //boolean results//

myn1= arr.slice(1,5)       //does not modifies the array and used for copy and extract//
console.log(myn1)

myn2= arr.splice(1,5)       //modifies the array and used to add,remove and replace : shows the removed elements of the array//
console.log(myn2)           //it starts at 1 and count till 5//

alphabets=['A','B','C','D'];
numbers=[1,2,3,4];
all=alphabets.concat(numbers)   //concatination of two arrays//
console.log(all);

const all_new = [...alphabets,...numbers]    //this also emrges two arrays with spread method that is ...//
console.log(all_new);

new_array=[1,2,3,[4,5],[6],[7,8,9]]
neww_array=new_array.flat(3)                //merges all the array inside the array be mentioning flat adn number or array in the array or just put infinite//
console.log(neww_array)

console.log(Array.isArray("keya"))      //checks if it is an array and gives bool output//
console.log(Array.from("keya"))         //makes it an array//
console.log(Array.from({name: "keya"}))  //cannt process dict and gives empty array//** 

let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4));   //makes it a array using of//

