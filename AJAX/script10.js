function getUserPagewise(pageNumber){
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
        return response.json()
    }).then(function(response){
        return response.data    
    })
}
function getSingleId(id){
    return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

function renderHTML(obj){
    document.write(`<h1>${obj.first_name}${obj.last_name}</h1>`)
    document.write(`<p>${obj.email}</p>`)
    document.write(`<p>${obj.id}</p>`)
    document.write(`<img src = "${obj.avatar}">`)
}

// getUserPagewise(1)
// .then(function(response){
//     let id1 = response[1].id
//     return getSingleId(id1)
// })
// .then(function(el){
//     console.log(el)
//     renderHTML(el)
// })

async function getUserDetails(){
    let arr = await getUserPagewise(1)
    let id = arr[1]['id']
    let obj = await getSingleId(id)
    renderHTML(obj)
}
getUserDetails()