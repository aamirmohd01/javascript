const user = {
    username : "aamir",
    price : 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);

        // this keyword current context ko refer kaarta hai
    }

}

// user.welcomeMessage()
// user.username = "sam" // yaha mai context change kar diya
// user.welcomeMessage()
console.log(this); // agar hum browser me ye print karenge to windows aayega and yaha print karne pe empty aayega kyunqi ye node hai ya standalone engine hai jaise , node, deno etc...

// function chai(){
//     let username = "aamir"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "aamir"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "aamir"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aamir"}) // implicit return bolte hai is line ko



console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
