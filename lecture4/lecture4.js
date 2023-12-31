// Arrays in JS
// Collections of items
// Create Array
// let heroes = [ "ironman", "hulk", "thor", "batman" ];
// let marks = [ 96, 75, 48, 83, 66 ];
// let info = ["rahul", 86, "Delhi" ];

let marks=[97,82,90,76,52];
console.log(marks);
console.log(marks.length);      //property

let heroes = [ "ironman", "hulk", "thor", "batman", "antman" ];
console.log(heroes);
console.log(heroes.length);

console.log(typeof marks);


// Arrays in JS
// Array Indices
// arr[0], arr[1], arr[2] ...
// note: strings are immutable, arrays are mutable


// Looping over an Array
// Print all elements of an array
//loops are iterable-> strings, objects, arrays as well

//for loop
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
};

//for-of loop
for(let hero of heroes){
    console.log(hero);
};


// Arrays in JS
// Array Methods
// Push() : add to end
let actors = ["Shah Rukh Khan" , "Salman Khan" , "Aamir Khan" , "Ranbir Kapoor"] ; 
console.log(actors);
actors.push("Irrfan Khan") ;
console.log(actors) ;
// adding more than one element
actors.push("Kartik Aaryan" , "Varun Dhawan") ; 
console.log(actors) ;
// Pop() : delete from end & return
console.log(actors.pop())
actors.pop() ; 
console.log(actors) ;
// toString() : converts array to string
console.log(actors) ;  //normal array-object
console.log(actors.toString()); // all 5 values as STRINGS
console.log(actors) ; 

console.log(marks);
let marksString = marks.toString() ; 
console.log(marksString) ; 
console.log(marks);

// Arrays in JS
// Array Methods
// Concat() : joins multiple arrays & returns result
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let Heroes = marvelHeroes. concat (dcHeroes);
console. log(Heroes);

let cricket = ["Virat Kohli" , "Babar Azam" , "Joe Root" , "Steve Smith"] ; 
let football = ["Lionel Messi" , "Cristiano Penaldo" , "Neymar Jr" , "Mesut Ozil"] ; 

let newArray = cricket.concat(football) ; 
console.log(cricket) ; 
console.log(football) ;
console.log(newArray) ;  //returns new array output

// unshift(): add to start
// similar to POP  method ; but in POP we delete from END and in shift we delete from START
cricket.shift() ;
console.log(cricket) ;
// shift() : delete from start & return
// 6.slice() : Returns a piece of Array ; //MAKES A NEW STRING AND DO NOT CHANGE EXISTING ARRAY
console.log(actors.slice(0,3)) ;
// 0 is INCLUSIVE but 3 is EXCLUSIVE i.e. only 0,1,2 index will return 

// 7.splice() : CHANGE IN ORIGINAL ARRAY (add ,remove, replace) ; MAKES CHANGES IN EXISTING ARRAY ONLY
// syntax : splice (start_index , delete_count from start_index , add_new_elements from start_index) 

let numb = [0,1,2,3,4,5,6,7,8,9] ; 
console.log(numb);

numb.splice(2 , 2 , 101 , 102 , 103) ; 
// start index = 2 ; del_count = 2 , thus 2 and 3 deleted ; add_elem = 101,102,103 from start_index
console.log(numb) ; 
// output : [0,1,101,102,103,4,5,6,7,8,9] 
// delete_count from start_index can be 0 for not deleting anything

// numb = [0,1,101,102,103,4,5,6,7,8,9]  

// add elemnt : 104 

// console.log( numb.splice(5,0,104) ) ;  DIRECT METHOD WILL NOT GIVE OUTPUT 

numb.splice(5,0,104) ;
console.log(numb) ; 
// output : [0, 1, 101, 102, 103, 104, 4, 5, 6, 7, 8, 9]

// Delete Element 7 
numb.splice(9 , 1) ;
console.log(numb) ;
// output : [0, 1, 101, 102, 103, 104, 4, 5, 6, 8, 9]

//Replace 103 with 63 
numb.splice(4 , 1 , 63) ;
console.log(numb) ;
// output : [0, 1, 101, 102, 63, 104, 4, 5, 6, 8, 9]

//IMPORTANT : if we give only one attribute in splice , it DELETES ALL SUBSEQUENT VALUES 
// [0, 1, 101, 102, 63, 104, 4, 5, 6, 8, 9]
numb.splice(5) ;  // DELETES EVERYTHING AFTER INDEX 5 
console.log(numb) ;
// output : [0, 1, 101, 102, 63]

