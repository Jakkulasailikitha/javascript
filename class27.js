// with out using the methods in the floordivision
// let g=((10/3));
// console.log(g)
// let i=((10%3));
// console.log(i)
// console.log(i/3)
// console.log(g-i/3)


// without using and opertor
// let n1=10;
// let n2=20;
// let n3=30;
// let lar=n1;
// if (n2>lar){
//     lar=n2
// }
// if (n3>lar){
//     lar=n3
// }
// console.log(`largest:${lar}`)

// let a=1000_00_000;
// console.log(a)
// let g=1.8e7;//e=exponential
// console.log(g)
// let f=0.02
// let n=5e-3; //5*10^
// console.log(n)
// console.log(1.23e3)
// console.log(1/100==1e-2)


// rounding of the values
// Math.floor //it will take the lowest value
// Math.ceil//it will give the up highest value it is opposite to the floor

// Math.round- rounds to the nearest integer
// .1 to .4 => rounds down to the nereast integer
// .5 to .9 => rounds up to the nereast integer

// console.log(Math.round(3.1))
// console.log(Math.round(3.9))
// console.log(Math.round(-3.1))
// console.log(Math.round(-3.5))

// console.log(Math.floor(-3.1))




// let num=3.14159265359;
// let a=((num*100));
// let b=(Math.round(a));

// console.log(b/1000);



// toFixed()-rounds to the nearest integer and returns a string

// let n=3.4;
// console.log(n.toFixed(0));

// const a=5;
// a=10;
// console.log((0.1+0.2))
// ===0.3);

var a=require("readline-sync");
var b=a.questionInt("enter the number:");
console.log(b);
