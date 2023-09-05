let ulList = document.querySelector('ul')
console.log(ulList)

let inputText = document.querySelector('input')
console.log(inputText)

let Button = document.querySelector('button')
console.log(Button)

Button.addEventListener('click',function(){
    let liText = inputText.value // kiwi
    let newEl =document.createElement('li')// it will create new li element  "<li></li>""
    newEl.textContent = liText // <li>kiwi</li>
    ulList.appendChild(newEl)
    inputText.value = ""

})


