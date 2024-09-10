// 1.Given length and breadth of a rectangle, return the area of the rectangle.
// function rectangle(l,b){
//     return l*b
// }
// console.log("area of rectangle:",rectangle(4,5));



//2.Take a number and print the square of the number.
// function square(s){
//     return s**2
// }
// console.log("square of the given number:",square(7));



// 3.Take two numbers and only print the integer part when a is divided by b.</p>
// function integer(q,w){
//     return (Math.floor(q/w))
// }
// console.log("the integer part :",integer(3,3))


/* 4.Take a number and print out the last digit of the number. */
// function lastDigit(num){
//     let g=num%10
//     return g
// }
// console.log("printing the last digit of a number:",lastDigit(45))


//  5.<p>Take a number and find the cube of that number.</p> */
// function cubeOfnumber(num){
//     return num**3
// }
// console.log("the cube of a number:",cubeOfnumber(7));


/* 6.<p>Take a 3 digit number and print the reverse of that number. Ex - 235 = 532</p> */
// function digitNumber(num){
//     let b=""
//     while (num>0){
//       let v=num%10
//       b=b+v
//       num= Math.floor(num/10)
//     } 
//     return b
//   }
// console.log("the reverse number:",digitNumber(345));
  


/*7. <p>Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7</p> */
// function firstdigit(n){
//     if (n>=0){
//     let p=n.toString()
//     return p[0]
//     }
//     else{
//         let p=n.toString()
//         return (-p[1])
//     }
// }
// console.log("the first of a number:",firstdigit(-345));



/* 8.<p>Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7</p> */

// function a(n){
//     if (n>0){
//         let p=n.toString()
//         let k=parseInt (p[0]);
//         let u=parseInt(n%10)
//         let sum=k+u
//         return sum
//     }
//     else{
//         let p=n.toString()
//         let k=parseInt (p[0]+p[1]);
//         console.log(k)
//         let u=parseInt(Math.abs(n%10))
//         console.log(u)
//         let sum=k+u
//         return sum
//     }
// }
// console.log("the sum of first and lastdigit of a number:",a(345));      


/*9. <p>Take salary of five employees and print the average salary of all the employees.</p> */
// function salary(q,w,e,r,t){
//     let g=q+w+e+r+t 
//     let n=g/5
//     return n
// }
// console.log("the average of the employees salary",salary(8,7,5,3,9))


/*10 <p>Take two numbers and sap them. Ex - a = 10, b=5; =&gt; a=5, b=10;</p> */

// function swap(q,w){
//     q,w=w,q
//     return [q,w]
// }
// console.log(swap(3,4))
