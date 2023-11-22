let buttonOne = document.querySelector('#one')
let inputEl = document.querySelector('input')
let ulList = document.querySelector('ul')

console.log(buttonOne)
console.log(inputEl)
console.log(ulList)

buttonOne.addEventListener('click',function(){
    let txt = inputEl.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = txt
    addButton(newLi)
    ulList.appendChild(newLi)
    inputEl.value = ""
})


ulList.addEventListener('click',function(e){

    if(e.target.tagName === "BUTTON"){

        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }
        else if(e.target.className === "down"){

            let li = e.target.parentElement
            let ulList = li.parentElement
            let nextLi = li.nextElementSibling
            if(nextLi){
                ulList.insertBefore(nextLi,li)
            }
 
        }
        else if(e.target.className === "up"){
            let li = e.target.parentElement
            let ulList = li.parentElement
            let prevLi = li.previousElementSibling
            if(prevLi){
                ulList.insertBefore(li,prevLi)
            }
            
        }

    }

})


function addButton(li) {

    
    let r = document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u = document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}