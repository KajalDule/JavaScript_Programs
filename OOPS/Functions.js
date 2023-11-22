// program 1 
// use string as a parameter and string as return type in function

function Greet(word){
    return `Good ${word}!`
}
let q1 = Greet('Night')
console.log(q1)

// use array as parameter and array as return type  in function

let arr1 = ['kajal','sapna','suraj']
function addEl(arr){
    arr.push('anjali')
    return arr
}
let q2 = addEl(arr1)
console.log(q2)

// use object as parameter and object as return in function
let info = {
    firstName : 'kajal',
    lastName : 'Dule'
}
function addCity(obj){
    obj.city = 'Nagpur'
    return obj
}
let q3 = addCity(info)
console.log(q3)

// boolean as paramter and boolean as return type 

function CanDrive(age,VehicleAvailable){
    if(age >= 18 && VehicleAvailable){
        return true
    }
}

let q4 = CanDrive(18,true)
console.log(q4)

// function as a paramet to another function  

let add = function(x,y){
    return x+y
}

function addition(fun, x,y){
    let operation = fun(x,y)
    return operation
}
let q5 = addition(add, 12, 4)
console.log(q5)

// function as a return type to another function 

function Subsraction(){
    let a = 10
    let b = 5
    return function(){
        return a-b
    }
}
let q6 = Subsraction()
console.log(q6)
console.log(q6())

// set as parameter and set as return type 

// map as parameter and map as return type

let k1 = function (x, y) {
    return x - y
}
let k2 = k1(10, 4)
console.log(k2)

// using arrow function

let k3 = (x,y) => x+y
// console.log(k3(10,5))
k4 = (k3(10,5))
console.log(k4)

//NEXT TOPIC -difference between array function and function expression



// map as parameter and map as return type 

