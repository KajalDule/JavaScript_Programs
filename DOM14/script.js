// // object literal 

// let kajal ={
//     firstName:'kajal',
//     lastName:'dule',
//     age: 26,
//     skilss:['SQL','python','JS'],
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(kajal)
// kajal.displayName()

// let sapna = {
//     firstName:"sapna",
//     lastName:"dule",
//     age:28,
//     skills:["CAD","CNC"],
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// console.log(sapna)
// sapna.displayName()

// function constructor 

function PersonA(fn,ln,ag,sk){
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.skills = sk
    // this.displayName = function(){
    //     console.log(this.firstName + this.lastName)
    // }
}

let kajal = new PersonA('kajal','dule',26,['sql','python','JS'])
console.log(kajal)
let sapna = new PersonA('sapna','dule',28,['CAD','CNC'])
console.log(sapna)

// Every object has one Object.__proto__ === Parent.prototype
// we use this when we have any function common for all the objects

console.log(kajal.__proto__ === PersonA.prototype)
console.log(sapna.__proto__ === PersonA.prototype)

PersonA.prototype.displayName = function(){
    console.log(this.firstName + this.lastName)
}

PersonA.prototype.country = "India"

console.log(kajal)
console.log(sapna)
kajal.displayName()
sapna.displayName()

console.log(kajal.country)
console.log(sapna.country)

