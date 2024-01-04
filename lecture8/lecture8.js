// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

// }
btn1.addEventListener("click", () =>{
    console.log("button 1 was clicked");

})
btn1.addEventListener("click", () =>{
    console.log("button 1 was clicked -handler2");
    
})
// btn1.addEventListener("click", () =>{
//     console.log("button 1 was clicked -handler3");
    
// })

const handler3 = () => {
    console.log("button 1 was clicked -handler3")
}
btn1.addEventListener("click", handler3);
btn1.addEventListener("click", () =>{
    console.log("button 1 was clicked -handler4");
    
})

btn1.removeEventListener("click", handler3);

// let div= document.querySelector("div");
