// // // Lexical scope - it is a scope where child function/sub-function can access the parateres of
// // parent function/main function

// // problem 1
// function addition(){
//     let x = 10
//     let y = 15
//     console.log(x+y)
//     function additionB(){
//         let a = 5
//         let b = 10
//         console.log(x+y)
//         console.log(a+b)
//         console.log(a+b+x+y)
//         function additionC(){
//         e = 2
//         d = 4
//         console.log(e+d+a+b+x+y)
//         console.log(e+d)
//         }
//         additionC()
//     }
//     additionB()
   
// }
// addition()

// problem 2

// function additionX(){
//     let a = 10
//     let b = 15
//     console.log('hello!!')
//     console.log(a+b)
//     return a+b
//     console.log('Bye!!') // this will not display in o/p as function ends with return
// }
// additionX() // this will call the function
// let q1 = additionX()
// console.log(q1)

// problem 3

let x = 10
console.log(x)

let add = function(a,b){
    console.log(a+b)
}
let q2 = add(10,5)
console.log(q2)
console.log(add) // it will show function which is writen after "=" e.g below
                                            // function(a,b){
                                            //     console.log(a+b)

let sub = function(x,y){
    return x - y
}


// function as a parametet to another function
function subtraction(fn,x,y){
    // let fn = function(x,y){
    //     return x - y
    // }

    let q4 = fn(x,y)
    return q4
}
let q5 = subtraction(sub,10,5)
console.log(q5)

// function as return type --- closures
function multiplication(){
    let a = 10 
    let b = 5
    return function mul(){
        return a * b
    }
}
let b =  multiplication()
console.log(b)
console.log(b())

// let b = function mul(){
//     return a * b
// }


// actual difference arrow function and function declaration


// function declaration 

function addA(x,y){
    return x + y
}
let q1 = addA(12,4)
console.log(q1)


// function expression 
let addB = function(x,y){
    return x + y
}
let q6 = addB(12,4)
console.log(q6)


// arrow function 
let addC = (x,y) =>{
    return x + y
}
let q7 = addC(12,4)
console.log(q7)


