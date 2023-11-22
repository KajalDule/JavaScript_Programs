// function fetchData(id){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(id%2==0){
//                 resolve('pass')
//             }
//             else
//             {
//                 reject('fail')
//             }

//         },1000)
//     })
// }

// Promise.all([fetchData(2),fetchData(4),fetchData(6),fetchData(8)])
// .then(function(result){
//     console.log(result)
// })
// .catch(function(result){
//     console.log(result)
// })

// promise.race() -- 

function getData1(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(id%2==0){
                resolve('Pass 1')
            }
            else{
                reject('Fail 1')
            }
        },1000)
    })
}


function getData2(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id%2==0){
                resolve('Pass 2')
            }
            else{
                reject('Fail 2')

            }
        },2000)
    })
}

function getData3(id){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(id % 2 == 0){
                resolve("Pass 3")
            }
            else {
                reject("Fail 3")
            }
        },3000)
    })
}

// // resolve , reject or case those who executed first , the output will be shown

// Promise.race([getData1(1),getData2(2),getData3(3)])
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// promise.allsettled()

Promise.allSettled([getData1(),getData2(),getData3()])

