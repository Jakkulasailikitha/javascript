// 1. Write a program that checks if a given number is even or odd.

// function checkNum(number){
//     if (number%2===0){

//         return "It is a even number"
//     }
//     else{
//         return "It is a odd number"
//     }
// }
// console.log("Checking the number:"(checkNum(678)));


// 2. Create a function that takes two numbers as parameters and returns the larger one
// function largeNumber(num1,num2){
//     if (num1>num2){
//         return "num1 is larger than num2"
//     }
//     else{
//         return "num2 is larger than num1"
//     }
// }
// console.log(largeNumber(3,8));


// 3. Write a function that determines if a given year 
// is a leap year.
// function leapYear(year){
//     if (year%4===0 && year%100!==0){
//         return "It is a leap year"
//     }
//     else if (year%100===0 && year%400===0){
//         return "It is a leap year"

//     }
//     else{
//         return "It is not a leap year"
//     }

// }
// console.log(leapYear(1200));



// Implement a program that checks whether a given character is a vowel or consonant.
// function checkCharacter(character){
//     if (character==="a"||character==="A"|| character==="E"|| character==="e"|| character=="I"|| character==="i"|| character==="o"|| character==="O"|| character==="u"|| character==="U"){
//         return "It is vowel character"
//     }
//     else{
//         return "It is consonant character"
//     }
// }
// console.log(checkCharacter("a"));


// 5. Create a function that takes three numbers as input and returns the largest among them.
// function largest(num1,num2,num3){
//     let lar=num1;
//     if (num2>lar){
//         lar=num2
//     }
//     if (num3>lar){
//         lar=num3
//     }
//     return lar
// }
// console.log(largest(1,7,4))


// 6. Write a program that checks if a given number is positive, negative, or zero.
// function checkNum(number){
//     if (number>0){
//         return "It is positive number"
//     }
//     else if (number<0){
//         return "It is negitive number"
//     }
//     else{
//         return "it is neutral or zero"
//     }
// }
// console.log(checkNum(0));



// 7. Implement a function that calculates the grade of a student based on their score.
// function checkGrade(marks){
//     let g=marks/600*100
//     console.log(g)
//     if (g>90){
//         return "grade A"
//     }
//     else if (g>80 && g<=90){
//         return "grade B"
//     }
//     else if (g>70 && g<=80){
//         return "grade C"
//     }
//     else if (g>60 && g<=70){
//         return "grade D"
//     }
//     else{
//         return "grade E"
//     }

// }
// console.log(checkGrade(456));

// 8. Create a program that determines if a given string is a palindrome.
// function checkPalindrome(string){
//     let u=0;
//     let j=""
//     while (u<string.length){
//         let c=string[string.length-1-u]
//         j=j+c
//         u=u+1
//     }
//     if (j===string){
//         return "palindrome"

//     }
//     else{
//         return "not a palindrome"
//     }
// }
// console.log(checkPalindrome("amma"));



//9 Write a function that checks whether a person is eligible to vote based on their age.
// function myName(name,age){
//     if (age>=18){
//         console.log(name,"your", age ,"is eligible for the vote" )
//     }
//     else{
//         console.log("Hey",name,"your age is",age,"you are not eligible for vote" )
//     }
// }
// myName("ram",45)


// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
// function triangle(s1,s2,s3){
//     if (s1===s2 && s2===s3 && s3===s1){
//         return "Equalateral triangle"

//     }
//     else if (s1===s2 || s2===s3 || s3===s1){
//         return "Isoceles Triangle"
//     }
//     else{
//         return "scalence triangle"
//     }
// }
// console.log(triangle(3,7,8));