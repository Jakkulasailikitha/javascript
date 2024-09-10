var a=require("readline-sync")
b=a.questionInt("enter the number:")
c=a.questionInt("enter the number:")
d=a.questionInt("enter the number:")
if (b>c && b>d){
    console.log(b,"is max")
}
else if (c>b && c>d){
    console.log(c,"is max")
}
else{
    console.log(d,"is max")
}


// // second max
// var a=require("readline-sync")
// b=a.questionInt("enter the number:")
// c=a.questionInt("enter the number:")
// d=a.questionInt("enter the number:")
// if (b>d && b<c){
//     console.log("b is max")  
// }
// else if ()
