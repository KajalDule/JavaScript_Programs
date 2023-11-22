// Es6 Class

class Person {
    firstName 
    lastName
    age
    rollNo
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let kajal = new Person()
console.log(kajal) // by default it willhave undefined values 

kajal.displayName() // it will give NaN - not a number output

kajal.firstName='kajal'
kajal.lastName = 'dule'
kajal.age = 26
kajal.rollNo = 77
console.log(kajal)

// program 2

class PersonB {
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}
let kajalA = new PersonB('kajal','dule',26,7)
console.log(kajalA)
kajalA.displayName()

// program 3

class PersonC {
    setFirstName(fn) {
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setAge(ag){
        this.Age = ag
    }
    setRollNo(rn){
        this.rollNo = rn
    }
}

let kajalK = new PersonC()
console.log(kajalK)
kajalK.setFirstName = 'kajalK'
kajalK.setLastName = 'DuleK'
kajalK.setAge = 26
kajalK.setRollNo = 27
console.log(kajalK)

// program 4 - use method as property on object to set/update/ retirve the values

// let info = {
//     firstName: "sapna",
//     lastName :'dule'
// }
// console.log(info.firstName)
// info.firstName = "kajal"
// console.log(info)

class Employess{

    set setFirstName(fn){
        this.firstName = fn
    }
    set setLastName(ln){
        this.lastName = ln
    }
    set setAge(ag){
        this.age = ag
    }
    set setRollNo (rn){
        this.rollNo = rn
    }

    get setFirstName(){
        return this.firstName
    }
    get setLastName(){
        return this.lastName
    }
    get setAge(){
        return this.age
    }
    get setRollNo (){
        return this.rollNo   
    }

}

let sapna2 = new Employess()
sapna2.setFirstName = 'sapna2'
sapna2.setLastName = 'dule2'
sapna2.setAge = 28
sapna2.setRollNo = 88
console.log(sapna2)

console.log(sapna2.setFirstName)