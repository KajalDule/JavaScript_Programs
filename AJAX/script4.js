// program 1

// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }
// additionA()
// additionB()

// program 2

// function additionA(){
//     setTimeout(function(){
//         console.log('A')
//     },3000)
// }

// function additionB(){
//    console.log('B')
   
// }

// additionA()
// additionB()

// program 3

// Async --------> sync

// function getInfo(){
//     setTimeout(function(){
//         console.log('user Created')

//     },3000)

//     setTimeout(function(){
//         console.log('get Id')

//     },2000)

//     setTimeout(function(){
//         console.log('get Info')
//     },1000)
// }

// getInfo()

// program 4 - call back hell

// function getInfo(){
//      setTimeout(function(){
//         console.log('user Created')
//         setTimeout(function(){
//             console.log('get Id')
//             setTimeout(function(){
//                 console.log('get Info')
//             },1000)
    
//         },2000)
    
//     },3000)
      
// }
// getInfo()

// program 5

// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if (a==b){
//         resolve('Hello!!')
//     }
//     else{
//         reject('Bye!')
//     }

// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will execute always!!')
// })

// pro
// .then(function(str){
//     console.log(str)
//     return 'First Then block'
// })
// .then(function(str){
//     console.log(str)
//     return 'second then block'
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will always execute!')
// })

function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('user created!')
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('get Id!')
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('Get Info!')
        },1000)
    })
}

// createUser()
// .then(function(str){
//     console.log(str)
//     return getId()
// })
// .then(function(str){
//     console.log(str)
//     return getInfo()
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log('i will always execute!')
// })

async function GetUserInfo(){
    let a = await createUser()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}
GetUserInfo()