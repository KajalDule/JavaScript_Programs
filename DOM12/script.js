//     <h1 id = 'one' class ='two' name ='nm'>Minskole</h1>
//     <p>I am Learning</p>
//     <ul>
//         <li class = "FE" name = "frontE">HTML</li>
//         <li class = "FE" name = "frontE">CSS</li>
//         <li class = "FE" name = "frontE">JavaScript</li>
//     </ul>
//     <ol>
//         <li class = "BE" name = "BackE">Python</li>
//         <li class = "BE" name = "BackE">JAVA</li>
//         <li class = "BE" name = "BackE">C++</li>
//     </ol>

let byclassFE = document.querySelector('.FE') // it will select single element
console.log(byclassFE)
let byclassBE = document.querySelector('.BE')// it will select single element
console.log(byclassBE)

let Headone = document.querySelector('h1') // it will select single element
console.log(Headone)

let byclassFE1 = document.querySelectorAll('.FE')
console.log(byclassFE1)

let byclassBE1 = document.querySelectorAll('.BE')
console.log(byclassBE1)

Headone.addEventListener('click',function(){
    for(let i =0; i<byclassFE1.length; i++){
        byclassFE1[i].style.color ="red"
        byclassBE1[i].style.color ="green"
    
    }
})





let byTag1 = document.querySelector('h1')
console.log(byTag1)

{/* <h1 id = 'one' class ='two' name ='nm'>Minskole</h1> */}

let allLiELements = document.querySelectorAll('li')
console.log(allLiELements)//nodeList

let allLiELements1 = document.getElementsByTagName('li')
console.log(allLiELements1) // html collection

let byId  = document.querySelector('#one')
console.log(byId)

let byId2 = document.getElementById('one')
console.log(byId2)

let feEl  = document.querySelectorAll('.FE')
console.log(feEl)

let feE2 = document.getElementsByClassName('FE')
console.log(feE2)

let nodeList = document.querySelectorAll("li[name = 'backE']")
let nodeList2 = document.getElementsByName("backE")
console.log(nodeList)
console.log(nodeList2)
