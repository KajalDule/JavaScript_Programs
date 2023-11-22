// Destructure 

// // program 1

// let arr1 = [11,22,33,44,55]
// let [x1,x2,x3,x4,x5] = arr1
// console.log(x1,x2,x3,x4,x5)

// // program 2

// let arr2 = ['kajal','suraj','sapna','avanti']
// let [a1,a2,a3,a4] = arr2
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)


// program 3

let arr3 = [['kajal','suraj','sapna'],['indira','mishti','anjali'],['mayur','santosh']]
let [[a1,a2,a3],[a4,a5,a6],[a7,a8]] = arr3
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)

// program 4

// let info = {
//     firstName :'kajal',
//     lastName : 'Dule',
//     age :26,
//     rollNo : 55
// }

// let {firstName,lastName,age,rollNo} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(rollNo)


// program 5

let info = [
    {
        firstName : 'kajal',
        lastName : 'dule'
    },
    {
        hobby:'dancing',
        age :26
    }
        
]
let [{firstName:fn,lastName:ln},{hobby:hb,age:ag}] = info
console.log(fn)
console.log(ln)
console.log(hb)
console.log(ag)





