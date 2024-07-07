/* 
PRIMITIVE type
 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
 */

 // JS is a dynamically typed language 
const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 2342424322524322422424n
// console.log(bigNumber)

 /* 
 Reference type : Non primitive

 Arrays, objects, Functions
 */

 const heros = ["aamir", "mohd", "asif"]; //arrays

 let myObj = { // objects
    name: "aaamiiir",
    age: 22
 }

const myFunction =  function(){
    console.log("Hello World");
}

// console.log(typeof bigNumber);

// *******************************

//  Stack => (Primitive) , yaha copy milta hai 
//  Heap => (Non-Primitive), yaha reference milta hai

let myName = "aamir"

let anotherName = myName
anotherName = "mohd"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : 'abc@yahoo.com',
    upi: 'shf@paytm'
}

let userTwo = userOne
userTwo.email = "aamir@google.com"

console.log(userOne.email);
console.log(userTwo.email);
