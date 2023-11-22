//  <h1 id = "one" class = "two" name = "nm">Kajal</h1>

let headOne = document.querySelector('h1')
let byId = document.querySelector('#one')
let byclass = document.querySelector('.two')
let byAttr = document.querySelector('h1[name = "nm"]')

console.log(headOne)
console.log(byId)
console.log(byclass)
console.log(byAttr)

console.log(headOne.textContent) // textContect shows text written in html

headOne.addEventListener('click',function(){
    headOne.textContent = 'Sapna'
    headOne.style.color = 'white'
    headOne.style.backgroundColor = 'purple'

})

