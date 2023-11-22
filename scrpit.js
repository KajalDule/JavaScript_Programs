// let arrA = [1,2,3,4,5]
// let add = 1
// let q1 = arrA.reduce(function(acc, el,index,arr){
//     acc.push(el+add)
//     return acc;

// },[])

// console.log(q1)

// let info = {
//     firstname : "kajal",
//     lastname :'Dule'
// }

// for (let key in info){
//     console.log(info[key])

// }

function find_max(nums){
    let max_num = Number.NEGATIVE_INFINITY;
    for(let num of nums){
        if(num>max_num){
            num = max_num
        }
    }
    return max_num;
}

let q1 = find_max([1,23,-6,77])
console.log(q1)