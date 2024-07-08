// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('aamir')


// what  is iife ?
// ans : jo function immediately execute ho jaye 
// best ans : Global scope k pollution se problem hoti hai kai baar, to us global scope k declaration yaa variables ko hatane k liye iife ka use karte hain

