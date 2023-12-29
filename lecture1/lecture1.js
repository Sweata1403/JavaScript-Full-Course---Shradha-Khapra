// Our 1st JS Code
// Console.log is used to log (print) a message to the console
// console.log("Apna College");

console.log("sweata chakraborty");

// Variables in JS
// Variables are containers for data

fullName='SWEATA CHAKRABORTY';
age=24;
price=99.99;
x=null;     //null means koi value nahi hain, absent hai value.
y=undefined;        
isFollow=false;
console.log(fullName);
console.log(y);
console.log(isFollow);

//javascript is a dynamically typed language. iska matlab hain ki hume javascript me data type nhi batana padta pehle se, wo khud
//run time pe smjh jayega ki variable me kaunsa datatype ki value stored hain

//a = b ["=" is the assignment operator]

// Variable Rules
// • Variable names are case sensitive; "a" & "A" is different.
// • Only letters, digits, underscore(_ ) and $ is allowed. (not even space)
// • Only a letter, underscore(_ ) or $ should be 1st character.
// • Reserved words cannot be variable names.

// let, const & var
// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const: Variable cannot be re-declared or updated. A block scope variable.

var age = 24;
var age = 59;
var age = 86;
console. log (age);

//var is not considered as a good way to declare the variables
let number = 24;
number = 59;
number = 86;
console.log(number);

//let is considered to be the right way to declare variables
const name=24;

console.log(name);

// Data Types in JS
// Number, String, Boolean, Undefined, Null, BigInt, Symbol

//primitive datatypes(7types)
//non-primitive datatypes(objects)-subcatogory=arrays and functions
    //objects: it is a collection of values
const student= {
    name:"Rahul",
    age:20,
    DOB: 17/1/2003,
    place: "Silchar"
};
console.log(student);
console.log(typeof student);
student["age"]=student["age"]+1; //this is the way to change the value of the variables inside the object student.
// console.log(student["age"]);
// console.log(student.name);

let numbers=23;
console.log(typeof numbers);

let FullName="Rahul Goala";
console.log(typeof FullName);

isFollow = true;
console.log(typeof isFollow);

let l;
let n=null;
let big=BigInt("12343");
let u=Symbol("Hello!");

console.log(typeof l);
console.log(typeof n);
console.log(big);
console.log(typeof big);
console.log(u);
console.log(typeof u);

//practice question:
// Let's Practice
// Q51. Create a const object called "product" to store information shown in the picture.

const product={
    productName : "Parker Jotter Standard CT",
    type : "ball pen",
    rating: 4,
    price: 270,
    offer: 5
};

console.log(product);
console.log(typeof product);
