let j=document.querySelector(".mode");
let h=document.querySelector("body");
let curmode="light";
// console.log(h);
j.addEventListener("click",()=>{
    if (curmode==="light"){
        h.style.backgroundColor="black";
        console.log("dark")
        h.style.color="white";
        curmode="dar k";
    }
    else{
        h.style.backgroundColor="grey";
        console.log("light")
        h.style.color="black";
        curmode="light"
    
    }

});