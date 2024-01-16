//         Redeclare     Reassign      Hoisting       scope       Initial Value     
//var =>     Yes            Yes           Yes         Global         not compulsary to assign initaial value
//let =>     No             Yes           No          Local          not compulsary to assign initial value
//const=>    No             No            No          Local          Compulsary to assign initial value  

// Hoisting =>  Hoisting means in simple you can not use variable before the delaration of variable
// You can use but throw error if not throw when use like this then it means that variable keyword allow hoisting 
// Example
// Var 
// console.log(x) // var variable allow hoisting but it give you undefined value
// var x; // No need to assign initial value
// var x = 'latesh';
// var x = 'patil'; // You can redeclare the variable in var
// x = 'world'; // You can reassign variable in var


// console.log(x1); // When you use variable before initialize variable in let then it throw error - Cannot access 'x1' before initialization
// let x1; // No need to assign initial value
// let x1 = 'hello';
// let x1 = 'world' // You can not redeclare the variable in let
// x1 = 'jai shree ram'; //You can reassign variable in var

// console.log(x2); // When you use variable before  initialize variable in const then it throw error - Cannot access 'x2' before initialization
// const x2 = 'world';
// const x2 // You need to assign initial value
// const x2 = 'hello'; // You can not redeclare the variable
// x2 = 'he[p'; // You can not reassign the value
 