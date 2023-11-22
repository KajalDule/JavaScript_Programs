// // there are 4 ways to create an object in JS
// // object literal
// // function constructor 
// // Es6 class
// // Object.create()

// // Example of Object Literal 

// let kajal = {
//     firstName: 'kajal',
//     lastName: 'dule',
//     age : 26,
//     rollNo: 7,
//     display:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(kajal)
// console.log(kajal.firstName)
// console.log(kajal.lastName)
// console.log(kajal.age)
// kajal.display()

// // Example of Function Constructor

// function Person(fn,ln,ag,rn){
//     this.firstName1 = fn
//     this.lastName1 = ln
//     this.age1 = ag
//     this.rollNo1 = rn
//     this.display = function(){
//         console.log(this.firstName1 + this.lastName1)
//     }
// }

// let sapna = new Person('sapna','dule',28,8)
// console.log(sapna)
// console.log(sapna.age1)
// sapna.display()

//ES6 class

// class PersonA {
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNo = rn
//         this.display = function(){
//             console.log(this.firstName + this.lastName)
//         }
//     }
// }

// let indira = new PersonA('indira','dule',54,10)
// console.log(indira)
// console.log(indira.firstName)
// console.log(indira.rn)
// console.log(indira.age)
// indira.display()

// Object.create

let kajal = Object.create({})
console.log(kajal)
kajal.firstName = 'Kajal'
kajal.lastName = 'Dule'
kajal.age = 26
kajal.rollNo = 7
kajal.display = function(){
    console.log(kajal.firstName + kajal.lastName)
}

console.log(kajal)
kajal.display()