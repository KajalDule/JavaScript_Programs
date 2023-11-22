// let info = {
//     firstName : 'Kajal',
//     lastName : 'Dule'

// }
// console.log(info.firstName)
// console.log(info.lastName)

// info.firstName = 'Sapna'
// console.log(info)

// let info2 = {
//     firstName : undefined,
//     lastName : undefined
// }

// console.log(info2.firstName)
// console.log(info2.lastName)
// info2.firstName = 'Kajal'
// console.log(info2)

class PersonA {
    set first_Name(fn){
        this.firstName = fn
    }
    get first_Name(){
        return this.firstName
    }
    set last_Name(ln){
        this.lastName = ln
    }
    get last_Name(){
        return this.lastName
    }
}

let jungkook = new PersonA()
jungkook.first_Name = 'Jeon Jungkook'
console.log(jungkook.first_Name)

// program 2

class Employee{
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
    displayAge(){
        return this.age
    }
}

let kajal1 = new Employee('kajal1','dule1',23,7)
let kajal2 = new Employee('kajal2','dule2',25,17)
let kajal3 = new Employee('kajal3','dule3',27,27)
let kajal4 = new Employee('kajal4','dule4',28,37)
let kajal5 = new Employee('kajal5','dule5',29,47)

let Employees1 = [kajal1,kajal2,kajal3,kajal4,kajal5]
Employees1.forEach(function(el){
    el.displayAge()
    el.displayName()
})

// add new city attribute in object
console.log(Employees1)

Employees1.forEach(function(el){
    el.city = 'Nagpur'
})

console.log(Employees1)

// to add the age of all the objects 
let totalAge = Employees1.reduce(function(acc,el,index,arr){
    return acc + el.displayAge()
},0)

console.log(totalAge)

// to get the average age 
console.log(totalAge/Employees1.length)

// program 3

let students = [
    new Employee("sapna1","dule1",10,41),
    new Employee("sapna2","dule2",12,42),
    new Employee("sapna3","dule3",16,43),
    new Employee("sapna4","dule4",18,44),
    new Employee("sapna5","dule5",20,45)
]

console.log(students[0].displayName())


let students1 = {
    studentA:new Employee("sapnaA","dule1",10,41),
    studentB:new Employee("sapnaB","dule2",12,42),
    studentC:new Employee("sapnaC","dule3",16,43),
    studentD:new Employee("sapnaD","dule4",18,44),
    studentE:new Employee("sapnaE","dule5",20,45)

}

for (let key in students1){
    students1[key].displayName()
}
