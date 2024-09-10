// creating and inserting the elements
// let btn=document.createElement("button");
// btn.innerText="click me"
// let g=document.querySelector("div");
// g.append(btn)
// g.prepend(btn)

// practice
// let button=document.createElement("button");
// button.innerText="click me";
// button.style.color="purple";
// button.style.backgroundColor="red";
// button.style.border="black"
// let h=document.querySelector("div");
// // h.append(button)
// h.append(button)
// h.prepend(button)
// h.before(button)


// for the insert elements
// let i=document.querySelector("p");
// console.log(i)
// i.getAttribute("class","new")


// for the event class
// onclick
// let g=document.querySelector("div");
// g.onclick=()=>{
//     console.log("print")
//     let a=1;
//     a++;
//     console.log(a)
// }


// for the onmouseover event
// let g=document.querySelector("div");
// g.onmouseover=()=>{
//     console.log("apple")

// }


// event object
let g=document.querySelector("div");
// g.onmouseover=(e)=>{
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
//     console.log(e.clientX,e.clientY)

// }


// event listeners add and remove 

// g.addEventListener("click",()=>{
//     console.log("help1")
// });
// // g.addEventListener("click",()=>{
// //     console.log("help2")
// // });
// g.addEventListener("click",()=>{
//     console.log("help3")
// })
// const help2=()=>{
//     console.log("help22")
// };
// // here we are using the remove function
// g.addEventListener("click",help2)
// g.removeEventListener("click",help2);