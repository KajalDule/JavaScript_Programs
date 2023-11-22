// https://reqres.in/api/users/2
// Promise.all()
// Promise.any()
// Promise.race()
// Promise.allSettled()

// parallel execution of promises 

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}
function getErrorState(){
    new Promise(function(resolve,reject){
        setTimeout(function(){
            reject('error Happened')
        },3000)
    })
}
// promise.any()- it breaks the execution after finding first true/pass condition 
// Promise.any([
//     getErrorState(),
//     getErrorState(),
//     getErrorState(),
//     getSingleUser(1),
//     getSingleUser(2),
//     getSingleUser(3),
// ]).then(function(response){
//     console.log(response)
// })

// promise.all()-- it returns all the passed output, if condition is true for all the i/ps


Promise.all([
    getSingleUser(2),
    getSingleUser(3),
    getSingleUser(9)
])
.then(function(users){
    console.log(users)
})
.catch(function(error){
    console.log(error)
})