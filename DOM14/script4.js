// // program 1 
// class Student{
//     firstName = 'kajal'
//     lastName = 'dule'
//     age = 26

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }
// }

// class Teacher{
//     firstName = 'kajal'
//     lastName = 'dule'
//     age = 26
//     salary = 50000

//     displayName(){
//         console.log(this.firstName+ this.lastName)
//     }

//     displaySalary(){
//         console.log(this.salary)
//     }


// }

// let kajal = new Student()
// console.log(kajal.firstName)
// console.log(kajal.lastName)
// console.log(kajal.age)
// console.log(kajal.salary)
// kajal.displayName()
// kajal.displaySalary

// program 2

class Student2 {
    firstName = 'kajal'
    lastName = 'Dule'
    age = 26

    displayName() {
        console.log(this.firstName + this.lastName)
    }
}

class Teacher2 extends Student2 {
    salary = 50000

    displaySalary() {
        console.log(this.salary)
    }
}

let kajal2 = new Teacher2()
console.log(kajal2.firstName)
console.log(kajal2.lastName)
console.log(kajal2.age)
console.log(kajal2.salary)

kajal2.displaySalary()
kajal2.displayName()

// program 3

class Student3{
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln
        this.age = age
    }
    displayName3(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher3 extends Student3{
    salary = 50007

    displaySalary3(){
        console.log(this.salary)
    }
}

let kajal3 = new Teacher3('kajal3','dule3',27)

console.log(kajal3.firstName)
console.log(kajal3.lastName)
console.log(kajal3.age)
console.log(kajal3.salary)

kajal3.displayName3()
kajal3.displaySalary3()

// program 4
class Student4{
    constructor(fn,ln,age){
        this.firstName = fn
        this.lastName = ln
        this.age = age
    }
    displayName4(){
        console.log(this.firstName + this.lastName)
    }
}

class Teacher4 extends Student4{
    constructor(fn,ln,age,salary){
        super(fn,ln,age)
        this.salary = salary

    }
    
    displaySalary4(){
        console.log(this.salary)
    }
}

let kajal4 = new Teacher4('kajal4','dule4',28,257888)

console.log(kajal4.firstName)
console.log(kajal4.lastName)
console.log(kajal4.age)
console.log(kajal4.salary)

kajal4.displayName4()
kajal4.displaySalary4()

