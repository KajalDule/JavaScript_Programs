function getUserPageWise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        // console.log(response)
        return response.json()
    }).
    then(function(response){
        return response.data
    })
}

function getSingleUser(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function renderHtml(obj){
    document.write(`<h1>${obj.first_name}${obj.last_name}</h1>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<p>${obj.id}<p>`)
    document.write(`<img src = "${obj.avatar}"> `)
}
// getUserPageWise(1)
// .then(function(response){
//     let id1 = response[1].id
//     return getSingleUser(id1) 
// })
// .then(function(el){
//     renderHtml(el)
// })

async function getUserDetails(){
    let arr = await getUserPageWise(1)
    let id2 = arr[1]['id']
    let obj = await getSingleUser(id2)
    renderHtml(obj)
}
getUserDetails()