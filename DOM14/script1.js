// // Object Literal
// let kajal = {
//     firstName : 'Kajal',
//     lastName :'Dule',
//     age : 26,
//     rollNo: 7,
//     displayName: function(){
//         console.log(this.firstName + this.lastName)
//     }

// }
// kajal.displayName()

// // Function Constructor

// function Person(fn,ln,ag,rn){
//     this.firstName=fn
//     this.lastName = ln
//     this.age = ag
//     this.rollNo = rn
//     // this.displayName = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let sapna = new Person('sapna','dule',28,90)
// let kajal2 = new Person('Kajal2','dule',26,7)
// console.log(sapna)
// console.log(kajal2)
// sapna.displayName()
// kajal2.displayName()

// // to avoid showing methods in every object we use prototype

// Person.prototype.displayName = function(){
//     console.log(this.firstName +  this.lastName)
// }

// Person.prototype.country = 'india'

// console.log(sapna)
// console.log(kajal2)

// console.log(kajal.__proto__ === Person.prototype)
// console.log(sapna.__proto__ === Person.prototype)

// console.log(kajal2 instanceof Person)
// console.log(sapna instanceof Person)

// console.log(amol2.hasOwnProperty("country"))
// console.log(amol2.hasOwnProperty("firstName"))

// // es6 class 

// class PersonB{
//     constructor(fn,ln,ag,rn){
//         this.firstName = fn
//         this.lastName = ln
//         this.age = ag
//         this.rollNo = rn
//         this.displayName = function(){
//             console.log(this.firstName + this.lastName)
//         }
            
//     }
//     displayName(){
//         console.log(this.firstName +this.lastName)
//     }
// }

// let kajal3 = new PersonB('kajal3','dule3',26,77)
// let sapan3 = new PersonB('sapna3','dule3',28,90)

// console.log(kajal3)
// console.log(sapna3)

// kajal3.displayName()
// sapna3.displayName()


// Object.create

let indira = Object.create({})
console.log(indira)

indira.firstName = 'indira'
indira.lastName = 'dule'
indira.age = 54
indira.rollNo = 8

indira.displayName= function(){
        console.log(this.firstName + this.lastName)
    }

console.log(indira)


let obj = {
    init:function(fn,ln,rollNo, age){
        this.firstName = fn 
        this.lastName = ln 
        this.rollNo = rollNo
        this.age = age
    },
    displayName:function(){
        console.log(this.firstName + this.lastName)
    }
}

let kajalD = Object.create(obj)
console.log(kajalD)
kajalD.init("kajalD","DuleD",26,77)
kajalD.displayName()
console.log(kajalD)






