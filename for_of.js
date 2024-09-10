// let d="apple";
// let v=0;
// for (let val of d){
//     console.log(val);
//     v++

// }
// console.log("s",v)


// for in
// let a={
//     name:"sai",
//     age:18,
//     marks:78,
// };
// for (let i in a){
//     console.log(i);
//     console.log(a[i]);
// }

// let u=1;
// while (u<=100){
//     if (u%2==0){
//          console.log(u)
//     }
//     u++
// }


// let a=["a","b","c","d","e","f","g"]

// let b=0;
// for (let b of a){
//     console.log(b.toLocaleUpperCase())
// }
// while(b<=a.length){
//     console.log(a[b])
//     b++
// }

let b=[250,645,300,900,50];
let c=0;
let m=0;
let p=0
while (m<b.length){
    c=Math.floor(10/100*b[m]);

    p=b[m]-c
    console.log(p)
    m++
}


