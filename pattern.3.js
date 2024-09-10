// var a=5
// i=1
// // var a=i
// var str=""
// while (i<=a){
//     j=5
//     while (j>=i){
//         str+=(j*str(i))+""
//         j--
//     }
//     i++
//     str+="\n"
// }
// console.log(str)

// // 5
// // 4 4
// // 3 3 3
// // 2 2 2 2
// // 1 1 1 1 1


// for i in range(int(input())):
//     n=int(input())
//     x=list(map(int,input().split()))
//     y=list(map(int,input().split()))
//     pos=0
//     for j in range(1,n):
//         if(x[j]>x[pos]):
//             pos=j
//         elif(x[pos]==x[j] and y[j]>y[pos]):
//             pos=j
//     print(pos+1)

let a=require("readline-sync");
let b=a.questionInt("enter the number:");
var i=1;
var c=0
while (i<=b){
    if(b%i==0){
        c++
    }
    i++
}
if (c===2){
    console.log("prime");
}
else{
    console.log("notprime")
}