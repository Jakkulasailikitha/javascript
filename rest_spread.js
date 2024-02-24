// rest operator
// var array=(...arr)=>
// console.log(arr);
// array(10,20,30,40,50)


// with the help of function
function sum(...args){
    console.log(args);

}
sum(1,2);
sum(4,5,6);



// for getting the sum for the function
// function sum(...args){
//     let total = 0;
//     for(let number of args){
//        total += number;
//     }
//     return total;
//     }
//     console.log(sum(1, 2)); //will give 3
//     console.log(sum(1, 2, 3)); //will give 6



// spread operator
// let arr1 = [1,2,3];
// let arr2 = [4,5];
// // So to merge these two arrays, you have to use the spread operator with each array 
// // inside the array literals.
// let newarr = [...arr1, ...arr2];
// console.log(newarr); //[1, 2, 3, 4, 5]


// Also, if you want to add new elements while combining two or more arrays,
// you can do this by putting them wherever you want.

// let arr1 = [1,2,3];
// let arr2 = [5,6];
// let anotherarr = [ ...arr1,0, ...arr2, 7];
// console.log(anotherarr); //[0, 1, 2, 3, 4, 5, 6, 7]

// let arr1 = [1,2,3];
// let arr2 = [5,6];
// let anotherarr = [...arr1,4,...arr2, 7];
// console.log(anotherarr); //[0, 1, 2, 3, 4, 5, 6, 7]

// individual sring combine
// let str = "amma";
// let arr = [...str];
// console.log(arr); //[ 'a', 'm', 'm', 'a'] 