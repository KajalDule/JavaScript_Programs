// let and const -- these two are widely used data types in js

// program 1 -- with Let we can update the value of same variable
// let a = 101
// console.log(a)
// a = 105
// console.log(a)

// const x = 108
// console.log(x)
// x = 155 // script1.js:11 Uncaught TypeError: Assignment to constant variable.
// console.log(x)

// with var value update can be done/allowed
// var b = 18
// console.log(b)
// b =15
// console.log(b)

// // scope 
// // let and const are blocked  scope
// // var is function scoped

// // program 3
// let a1 = 10
// const b1 = 9
// console.log(a1)
// console.log(b1)

// // program 4
// let z = 23
// {
//     let z = 40
//     console.log(z) // 40
// }
// console.log(z) // 23

// program 5

// let m = 12
// {
//     m = 50 // this means updating the value of m
//     console.log(m) // 50
// }
// console.log(m) // 50

// program 6
// const m1 = 10 
// {
//     //m1 = 500 // Uncaught TypeError: Assignment to constant variable.
//     console.log(m1) //10
// }
// console.log(m1) //10

// let j = 5
// {
//     const j = 10
//     console.log(j)//10
// }
// console.log(j)//5

// var is function scoped

// var y = 8
// let y2 = 5
// function display(){
//     var y3 = 9
//     console.log(y)//8
//     console.log(y3)//9
//     {
//         console.log(y2)//5
//         let y3 = 90
//         console.log(y3) //90
//         var j = 98
//     }
//     console.log(y3) // 9
//     console.log(j)//98
// }

// display()
// //console.log(y3)//uncaught ReferenceError: y3 is not defined


// {
//     var h = 100
// }
// console.log(h)//100

