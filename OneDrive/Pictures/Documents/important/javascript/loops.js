
// for -> (initialization, condition, +1 i.e, again in loop)

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
       console.log("5 is best number");
    }
    console.log(element);
}
console.log();

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    
    for (let a = 0; a <=3 ; a++) {
        console.log(`inner loop value ${a} and inner loop ${i}`);   
    } 
}

// break is used so taht loop stops after a condition//
// continue continues the loop even after condition//


/*while loop*/
let i=0                                           //initialization//
while (i<=10) {                                   //condition//
    console.log(`value of index is ${i}`);
    i =i+2                                        //increment//
}

// while loop in array//

let myArray =["flash","spiderman","batman"]
let arr =0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr++
}

/*Do while loop */

let score = 1                                 //initialization//
do {
    console.log(`score is ${score}`);
    score++                                       //increment//
} while (score<=10);                             //condition//