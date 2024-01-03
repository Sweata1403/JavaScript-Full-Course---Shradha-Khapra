// Let's Practice
// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College
// students" to this text using JS.

// => acess the element first->then change the property
let h2= document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College"; //concatenate
