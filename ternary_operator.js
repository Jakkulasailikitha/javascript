// ternary operator to check the eligibility to vote
var  age=require("readline-sync");
age=age.questionInt("enter the number:")
var result =
    (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
