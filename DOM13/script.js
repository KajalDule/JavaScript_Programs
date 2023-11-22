{/* <h1 id = 'one' class = "two" name = 'nm'>My fruit list</h1>
    <p id = 'three' class = 'four' name = 'nm'></p>
    <ol>
        <li class = 'fruit' name = 'fri'>Apple</li>
        <li class = 'fruit' name = 'fri'>Papaya</li>
        <li class = 'fruit' name = 'fri'>watermelon</li>
        <li class = 'fruit' name = 'fri'>KIWI</li>
    </ol>
    <script src ='script.js'></script> */}

// to find the h1 tag element
    //let q1 = document.querySelector('#one')
    //let q2 = document.querySelector('.two')
    //let q3 = document.querySelector('h1')
    //let q4 = document.querySelector('h1[name ="nm"]')
    // console.log(q1)
    // console.log(q2)
    // console.log(q3)
    // console.log(q4)

// to find the li elements
//     let liList = document.querySelectorAll('li')
//     console.log(liList)
//     let liListbyclass = document.querySelectorAll('.fruit')
//     console.log(liListbyclass)

// // finding the li elements with alternative 
// {/* <li class = 'fruit' name = 'fri'>Apple</li> */}

// let getLibyId = document.getElementById('one')
// console.log(getLibyId)

// let getElbyTagname = document.getElementsByTagName('li')
// console.log(getElbyTagname)

// let getLibyclassName = document.getElementsByClassName('fruit')
// console.log(getLibyclassName)

// let getLibyname = document.getElementsByName('fri')
// console.log(getLibyname)

{/* <p id = 'three' class = 'four' name = 'nm'> my Paragraph</p> */}

let elP = document.querySelector('p')
console.log(elP.className)
elP.classList.add('six') // it doesn`t returns anything
elP.classList.remove('six')
elP.classList.toggle('six')
elP.classList.toggle('six')
console.log(elP)

let q1 = elP.getAttribute('id')
console.log(q1)
elP.setAttribute('id',"seven")// it will update the id attribute from three to seven
console.log(elP)
elP.setAttribute('data-cy',"username")
console.log(elP)
elP.removeAttribute('id')// it will remove the attribute 
console.log(elP) 

