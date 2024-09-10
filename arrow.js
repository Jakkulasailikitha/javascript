// var arrowd =(a,b)=>{
//     return(a+b);

// }
// console.log(arrowd(12,7))


// var arrowy=(a)=> a*a
// console.log(arrowy(5))



// var i = 0;
// var c = 0;
// function apple(a) {
//     while (i < a.length) {
//         if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") {
//             c++;
//         }
//         i++;
//     }
//     return c;
// }
// let a = "hello";
// console.log(apple(a));

var i = 0;
var c = 0;
var apple=(a)=>{
        while (i < a.length) {
        if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") {
            c++;
        }
        i++;
    }
    return c;
}
let a = "hello";
console.log(apple(a));

