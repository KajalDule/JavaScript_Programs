let x= 10
console.log(typeof x)

let name = "kajal"
console.log(typeof name)

let city = ['nagpur','pune','hydrabad','banglore']
console.log(typeof city)

let info = {
    firstname:"kajal",
    lastname:"dule",
    age:26
}
console.log(info)
console.log(typeof info)

//

let kajal = {
    firstname:"kajal",
    lastname:"dule",
    age:26
}

let sapna = {
    firstname:"sapna",
    lastname:"dule",
    age:28
}

// 100 object ---- 500 lines of code

class Person {
    firstname;
    lastname;
    age;
}

// the below method of creating object and then updating their values/attributes 
// it will also makecode lengthy 
let kajal1 = new Person()
kajal1.firstname = "kajal"
kajal1.lastname = "dule"
kajal1.age = 26

console.log(kajal1)

// to avoid above code repetation, we use constructor

class Person1 {
    constructor(fn,ln,ag){
        this.firstname1 = fn
        this.lastname1 = ln
        this.age1 = ag

    }

}

let kajal2 = new Person1('kajal2','dule2',26)
console.log(kajal2)

let sapna2 = new Person1('Sapna1','dule1',28)
console.log(sapna2)

console.log(typeof sapna2)


