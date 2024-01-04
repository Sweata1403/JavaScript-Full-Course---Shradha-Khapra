// let div = document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para= document.querySelector("p");
// // console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class", "newClass"));

// let div= document.querySelector("div");
// console.log(div);

// div.style.backgroundColor="purple";

let newBtn= document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let p=document.querySelector("p");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);

let para= document.querySelector("p");
para.remove();
newHeading.remove();