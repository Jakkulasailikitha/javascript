// function myName(name,age){
//     if (age>=18){
//         console.log(name,"your", age ,"is eligible for the vote" )
//     }
//     else{
//         console.log("Hey",name,"your age is",age,"you are not eligible for vote" )
//     }
// }
// myName("ram",45)



// function myName(name,age){
//     if (age>=18){
//         console.log(name,"your", age ,"is eligible for the vote" )
//     }
//     else{
//         console.log("Hey",name,"your age is",age,"you are not eligible for vote" )
//     }
// }
// console(myName("ram",45))
var myName = (name, age) =>  (age >= 18)?(`${name} your age is ${age} eligible for the vote.`):(`Hey ${name} your age is ${age} You are not eligible for vote.`);
console.log(myName("ram", 45));
// let x = (x, y) => x * y;
// console.log(x(6,7))
