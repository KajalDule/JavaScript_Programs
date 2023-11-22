// // creating a promise

// let prom = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 100

//     if(a ==b){
//         resolve('both numbers are equal')
//     }
//     else{
//         reject('both numbers are unequal')
//     }
// })

// prom.then(function(str){
//     console.log(str)

// },function(str){
//     console.log(str)

// })

// let promiseA = new Promise(function(resolve,reject){
//     let a=10
//     let b = 10

//     if(a=b){
//         resolve('both numbers are equal')
//     }
//     else{
//         reject('both numbers are not equal')
//     }
// })

// promiseA.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// program 2 

let promise1 =new Promise(function(resolve,reject){
    let names = 'kajal'
    if(names.startsWith('k')){
        console.log('pass')
        resolve([11,22,33])
    }
    else{
        console.log('fail')
        reject([-11,-22-33])
    }
})

promise1.then(function(arr){
    console.log(arr)
}, function(arr){
    console.log(arr)
})

// let prom2 = new Promise(function(resolve,reject){
//     let names = 'kajal'
//     if(names.startsWith('k')){
//         console.log('pass')
//         resolve([11,22,33])
//     }
//     else{
//         console.log('fail')
//         reject([-11,-22,-33])
//     }
// })

// prom2.then(function(a){
//     console.log(a)
//     console.log(a[0])

// },function(b){
//     console.log(b)
//     console.log(b[0])

// })

// // program 3

// let prom3 = new Promise(function(resolve,reject){
//     let cities = ['bhopal','nagpur','jaipur','raipur','pune']

//     if (cities.includes('jaipur')){
//         resolve({firstName :'kajal',lastName : 'dule'})
//     }
//     else{
//         reject({firstName:'sapna',lastName:'dule'})
//     }
// })
// prom3
// .then(function({firstName,lastName}){
//     console.log(firstName)
//     console.log(lastName)
// })
// .catch(function({firstName,lastName}){
//     console.log(firstName)
//     console.log(lastName)
// })
// .finally(function(){
//     console.log('i will always run!')
// })

// program 4

// let pro4 = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a==b){
//         resolve('equal')
//     }
//     else{
//         reject('not equal')
//     }
// })

// pro4
// .then(function(str){
//     console.log(str)
//     return 'proceed'
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will always execute')
// })