// for of loop//
const myArray=[1,2,3,4,5]
for (const num of myArray) {
    console.log(num); 
}

//maps->for unique values//
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

console.log(map);

for (const [key,value] of map) {                //it's for destructure of array//
    console.log(key,':',value);
    
}

const coding=["ruby","python","javascript","cpp"]
coding.forEach( function (val){
    console.log(val);
})

coding.forEach((item,index,arr) => {console.log(item,index,arr);  
})


const myNums =[1,2,3,4,5,6,7,8,9,10]
const newnums= myNums.filter((num) => num>4)              //in filter the outputs are thouse which satisfy the condition//
console.log(newnums);

// if we use scope in filter that is {} then we must use the return keyword//

// example of books for fliter//

const books=[
    {title: "Book 1",genre: 'fiction',publish: 1981,edition: 2000
    },
    {title: "Book 2",genre: 'Non-fiction',publish: 1982,edition: 2001
    },
    {title: "Book 3",genre: 'fiction',publish: 1983,edition: 2002
    },
    {title: "Book 4",genre: 'History',publish: 1984,edition: 2003
    },
    {title: "Book 5",genre: 'History',publish: 1985,edition: 2004
    },
    {title: "Book 6",genre: 'fiction',publish: 1986,edition: 2005
    },
];

let userBooks=books.filter((bk) => bk.genre==='History')
console.log(userBooks);
userBooks=books.filter((bk) => {return bk.publish >= 1983})
console.log(userBooks); 

const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum=myNum.map((num) => num +10)
console.log(newNum);

const newNums = myNum
             .map((num) => num *10)
             .map((num) => num +1)  
             .filter((num) => num >=40)                 //this is called chaining in this example we used two maps in second map it will take the values of array created by first map,the output will be of final statement//
console.log(newNums);

//reduce() reduces an array to a single result by repeatedly applying a function.//

 const myTotal=myNum.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
 },0)
 console.log(myTotal);

//  accumlator stores the running value and current avlue stores the current values of array and in each loop addition ahppens in the nd addition of all teh values in array is provided using reduce , this is used in cart projects//
 
const myTotals = myNum.reduce((acc,curr) => acc+curr,0)            //usage of reduce in arrow function mostly use this one only//
console.log(myTotals);




