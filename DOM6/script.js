let headOne= document.querySelector('h1')
let input = document.querySelector('input')
let buttonColor = document.querySelector('button')

console.log(headOne)
console.log(input)
console.log(buttonColor)

buttonColor.addEventListener('click',function(){
    let TextBox = input.value
    headOne.style.color = TextBox
    input =""

})
