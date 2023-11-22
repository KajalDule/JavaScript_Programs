// Map data type - it can stores key from different data types
// it doesn`t stores value from index

let a=100
console.log(typeof a)

let y = true
console.log(typeof y)

let name = 'kajal'
console.log(typeof name)

let city = ['nagpur','pune','banglore']
console.log(typeof city)

let info = {
    first_name : 'kajal',
    last_name : 'dule'
}

console.log(info)
console.log(typeof info)

let info2 = {
    1:"kajal",
    2:"dule"
}

console.log(info2)
console.log(typeof info2)

// different ways to create a Map

let mapA = new Map()
console.log(mapA)

let mapB = new Map([
    [1,'kajal'],
    [2,'sapna'],
    [3,'indira']
])
 console.log(mapB)
//key:value
//property:value
// difference between object and map - 
// object keys or properties are always string 
// Map keys can be any data type 

// major difference between object and map
// object key can only be string 
// map key can be any data type
// Object -- properties and methods

let mapC = new Map([
    [1,'Developer'],
    [2,'Tester'],
    [3,'Support']
])

console.log(mapC)

// Size property to find the size of map

let q1 = mapC.size
console.log(q1)

// set() method to add/insert new key:value in map

let q2 = mapC.set(4,'Admin')
console.log(q2)
console.log(mapC)

// get() to retrive the details using key

let q3= mapC.get(3)
console.log(q3)

// has() - to check if the perticular value/element exist in Map and returns true/false

let q4 = mapC.has(2)
console.log(q4)

// clear() - to create the all Key:values from Map

// let q5 =mapC.clear()
// console.log(q5)// returns nothing
// console.log(mapC)

// delete()- to delete perticular Key:value from Map

// let q6 = mapC.delete(2)

// console.log(mapC)

//foreach()- to perform operation on all the elements(key:value) in Map

mapC.forEach(function(v,k){
    console.log(v,k)
})

//.keys()- to get the all keys from Map

for (let key of mapC.keys()){
    console.log(key)
}

// .values() to get all the values from Map

for (let val of mapC.values()){
    console.log(val)
}

// .entries() to get all Key:value from Map

for (let [k,v] of mapC.entries()){
    console.log(k,v)
}