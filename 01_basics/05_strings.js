const name = "aamir"
const repoCount = 15

// console.log(name + repoCount + " value"); // outdated

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

//declaration of string
const gameName = new String('aamirr')
// console.log(gameName[0]);
// console.log(gameName.__proto__); // prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-4, 4);
console.log(anotherString);

const newStringOne = "  hitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://aamir.com/aamir%30mohd"
console.log(url.replace('%30', '-'))