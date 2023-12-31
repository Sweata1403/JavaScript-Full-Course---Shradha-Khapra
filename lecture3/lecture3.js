// Loops in JS
// Loops are used to execute a piece of code again & again
// for Loop
// for (let i = 1; i <= 5; i++) {
//      console.log("apna college");
//}

for(let i=0; i<5; i++){
    console.log("Sweata Chakraborty");
}

console.log("your loop has ended!");

// Loops in JS
// Infinite Loop: A Loop that never ends

// Loops in JS
// while Loop
// while (condition) {
// // do some work
// }

let i=1;
while(i<=5){
    console.log("Rahul Goala");
    i++;
}

console.log("Please continue this loop");

// Loops in JS
// do-while Loop
// do {
// // do some work
// } while (condition);     

// let a = 20;
// do{
//     console. log ("'Apna College");
//     a++;
// } while(i<=10);

// Loops in JS
// for-of Loop
// for (let val of strVar) {
// //do some work
// }

//helps us in applying loops in strings or in arrays

let str="sweata";       //for-of loop
let size=0;
for(let val of str){
    console.log("val=", i);
    size++;
};

console.log("string size= ", size);

// Loops in JS
// for-in Loop
// for (let key in objVar) {
// //do some work
// }

let student={
    name:"Sweata",
    age:21,
    batch:2024,
    stream: "ECE",
    CGPA: 8.35,
    isPass:true
};
for(let key in student){
    console.log("key=", key, "value=", student[key]);
};

// Strings in JS
// String is a sequence of characters used to represent text
// Create String
// let str = "Apna College";
// String Length
// str.length
// String Indices
// str[O], str[1], str[2]


// Template Literals in JS
// A way to have embedded expressions in strings
// "this is a template literal'
// String Interpolation
// To create strings by doing substitution of placeholders
// 'string text ${expression} string text

let obj = {
    item: "pen",
    price: 10
};
let output = `the cost of ${obj.item} is ${obj.pric} rupees`;
console.log(output);
console.log ("the cost of", obj.item, "is", obj.price, "rupees");

//Template Literals
let specialString = 'This is a template literal' ;
console.log(typeof specialString);


// String Methods in JS
// These are built-in functions to manipulate a string
// • str.toUpperCase( )
let Str = "ApnaCollege";
let newStr = Str.toUpperCase();
console.log(Str);
console.log(newStr);
// • str.toLowerCase()
let SStr = "ApnaCollege";
let NewStr = SStr.toLowerCase();
console.log(SStr);
console.log(NewStr);
// • str.trim( ) || removes whitespaces


// String Methods in JS
// • str.slice(start, end?) |I returns part of string

let you="12345";
console.log(you.slice(1,4));
// • strl.concat( str2 ) |I joins str2 with str1
let You="Rahul";
let Me= "Sweata";
let res= You.concat(Me);
console.log(res);
// • str.replace( searchVal, newVal)

let r = "hello";
console.log(r.replace("h", "y"));
// • str.charAt( idx)

let w = "IloveJS";
console. log(w.charAt(0));