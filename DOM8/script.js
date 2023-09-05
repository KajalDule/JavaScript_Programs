// finding the element 
// based on user action read the text from input element 
// create a new element and add the text to it
// append the element to li

let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')
let button = document.querySelector('button')

console.log(inputText)
console.log(ulList)
console.log(button)

button.addEventListener('click',function(){
    let textLi = inputText.value
    let NewLi = document.createElement('li')
    NewLi.textContent = textLi
    ulList.appendChild(NewLi)
    inputText.value = ""
})