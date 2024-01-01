// Functions in JS
// Block of code that performs a specific task, can be invoked whenever needed
// Functions in JS
// Function Definition                                      // Function Call
// function functionName() {                                //functionName();
//     //do some work
// }

// function functionName( param1, param2...) {
//     //do some work
// }

// function myFunction(){
//     console.log("Welcome to Apna College");
//     console.log("We are learning JS");
// }
// myFunction();


// //Function helps us to save from redundancy-> which means repeating
// function MyFunction(msg){       //->parameter-> input
//     console.log(msg);
// }

//functiona paramters are like local variables of function-> block scope

// MyFunction("I love JS");

//function -> 2 numbers, sum
// function sum(x, y){
//     //local variables
//     s=x+y;
//     return s;

// }
// let val =sum(3,4);
// console.log(val);

// Arrow Functions
// Compact way of writing a function
// const functionName = ( param1, param2...) => {
//      I/do some work
// }
// const sum = ( a, b) => {
//     return a + b;
// }


//sum function
// function sum(a,b) {
//     return a + b;
// }
// const arrowSum=(a, b) => {
//     console. log (a + b);
// }
// //multiplication function
// function mul (c, d){
//     return c*d;
// }
// const arrowMul=(c,d)=>{
//     console.log(c * b);
// }

// const printHello=() => {
//     console.log("hello!");
// }


// forEach Loop in Arrays-> it is a method
// arr.forEach( callBackFunction)
// CallbackFunction: Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.
// Pall up for
// arr.forEach( ( val) => {
//      console.log(val);
// } )
// let arr = [1, 2, 3, 4, 5];
//     arr. forEach((val, idx, arr) => {
//     console.log (val, idx, arr);
// }); 

//Q) What is higher order function/methods?
// HOF/HOM are those functions/methods which take a second function as parameter or else it returns anaother function


// Some More Array Methods
// Map
// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array
// arr.map( callbackFnx (value, index, array ) )
// let newArr = arr.map( (val) => {
//      return val * 2;
// });

// let nums = [167, 52, 391];
// nums.map((val) => {
//     console. log (val);
// });


// Some More Array Methods
// Filter
// Creates a new array of elements that give true for a condition/filter.
// Eg: all even elements
// let newArr = arr.filter( (val) => {
//      return val % 2 === 0;
// });  

// let Arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter ((val) => {
//     return val > 3;
// });
// console. log(evenArr);

// Some More Array Methods
// Reduce
// Performs some operations & reduces the array to a single value. It returns
// that single value.

// JavaScript Demo: Array.reduce()

let arrayy = [1, 2, 3, 4];
const output = arrayy.reduce((res, curr) => {
    return res + curr;
});

console.log(output);

let q=[5,6,1,2,3];
const Output=q.reduce((prev, curr)=>{
    return prev>curr ? prev : curr;
});

console.log(Output);