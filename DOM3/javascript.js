// <h1 class = 'one' id = 'two' name = 'nm'> Kajal</h1> 

//css selector

//TagName

let headOne = document.querySelector('h1')
console.log(headOne)

//Class

let byClass = document.querySelector('.two')
console.log(byClass)

//Attribute
// TagName[attribute = "value"]

let byAttribute = document.querySelector('h1[name = "nm"]')
console.log(byAttribute)


// <p id = 'three' class = 'four' name = 'five'>Paragraph</p>

let byTag1 = document.querySelector('#three')
console.log(byTag1)

let byClass1 = document.querySelector('.four')
console.log(byClass1)

let byAttribute1 = document.querySelector('p[name = "five"]')
console.log(byAttribute1)

//Program1 
let HeadTwo = document.querySelector('#two')
console.log(HeadTwo)

// HeadTwo.addEventListener('mouseover',function(){
//     HeadTwo.textContent = 'Mishthi'
// })

// console.log(HeadTwo.textContent)
// HeadTwo.textContent = "Mishthi"

HeadTwo.addEventListener('click',function(){
    HeadTwo.textContent = 'Mishthi'
    HeadTwo.style.color = 'Purple' ;
})


// let info  = {
//     firstName:"Kajal",
//     lastName:"Dule"
// }

// console.log(info.firstName)
// info.firstName = "Sapna"
// console.log(info)

let info = {
    fullName:"Kajal Dule",
    parent:{
        father:"Sanjay Dule",
        mother:"Indira Dule"
    }

}

//info.parent.mother = "Indira S Dule"





