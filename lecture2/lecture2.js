// Comments in JS
// Part of Code which is not executed

//This is a single line comment

/* This is a multi-line
comment. */

// Operators in JS
// Used to perform some operation on data
// Arithmetic Operators
// +,-,*,/I
// • Modulus (%)
// • Exponentiation (**) eg(a**b)
// • Increment (++)
// • Decrement(--)


//Arithmatic Operators
let a=4;
let b=5;
console.log("a+b= ", a+b);
console.log("a-b= ", a-b);
console.log("a*b= ", a*b);
console.log("a/b= ", a/b);

//unary operators

console.log("a%b= ", a%b);
console.log("a**b= ", a**b);
console.log("a++= ", a++);
console.log("a--= ", a--);

// Operators in JS
// Assignment Operators: to assign values
// +=, -=, *=, %=, **=

// Operators in JS
// Comparison Operators
// Equal to ==
// Not equal to !=
// Equal to & type ===
// Not equal to & type !==
// >, >=, <, <=

// Operators in JS
// Logical Operators
// Logical AND &&
// Logical OR ||
// Logical NOT !

//Logical Operators
let c = 6;
let d = 5;
let cond1 = c > b; //true
let cond2 = c === 6; //true
console. log ("cond1 && cond2 = ", cond1 && cond2);

// Conditional Statements
// To implement some condition in the code
// if Statement
// let color;
// if(mode === "dark-mode" ) {
//      color = "black";
// }


let age=25;
if (age>=18){
    console.log("you can vote");
}
if(age<18){
    console.log("wait till you turn 18!");
}


let mode="dark";
let color;
if(mode==="dark"){
    color="black";
}
if(mode="light"){
    color="white";
}

console.log(color);

// if-else Statement
let colour;
if(mode ==="dark-mode") {
    color = "black";
} else {
color = "white";
}