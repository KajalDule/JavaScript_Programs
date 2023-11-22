let byTag1 = document.querySelector('h1')
let byClass = document.querySelector('.two')
let byId1= document.querySelector('#one')
let byName1 = document.querySelector('h1[name="nm"]')

console.log(byTag1)
console.log(byClass)
console.log(byId1)
console.log(byName1)

// program 1

let byclass2 = document.querySelector('.fruit')
console.log(byclass2) // it will select only first element in li 

let byClassList = document.querySelectorAll('.fruit')
console.log(byClassList) //it will select/find thecomplete list of elements and return nodelist


byTag1.addEventListener('click',function(){
    for(let i =0; i<byClassList.length;i++){
        //console.log(i) - it will give index no.
        //console.log(byClassList[i])-- it will select all the elements in list
        console.log(byClassList[i].textContent) // it gives the all elements in li (apple, mango...)
        byClassList[i].style.color = 'purple'
    }
})

// program 2

// <p id = 'three' class = 'three' name = 'nm'>My Fruits List</p>

// let q1 =document.querySelector('#three') -- it will find the element byid
// console.log(q1)

let byId2 = document.getElementById('three')
console.log(byId2)

// let byClass3 = document.querySelectorAll('.fruit')
// console.log(byClass3)

let byClass3 = document.getElementsByClassName('fruit')
console.log(byClass3) // it gives htmlcollection list [Apple,mango,kiwi,papaya]

// let byTag2 = document.querySelectorAll('li')
// console.log(byTag2) // it gives node list [Apple,mango,kiwi,papaya]

let byTagName = document.getElementsByTagName('li')
console.log(byTagName)

// let byNameAttribute = document.querySelectorAll('p[name="nm"]')
// console.log(byNameAttribute)

let byNameAttribute = document.getElementsByName('nm')
console.log(byNameAttribute)

