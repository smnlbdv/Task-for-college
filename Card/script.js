const addButton = document.querySelector('.label2')
const subButton = document.querySelector('.label1')
const counter = document.querySelector('.counter_div')

addButton.addEventListener('click', addCliker)
subButton.addEventListener('click', subCliker)

let count = 0

function addCliker() {
    count++
    counter.innerText = count
}

function subCliker() {
    if (count <= 0) {
        count = 0
        counter.innerText=count
    } else {
        count--
        counter.innerText= count
    } 
}

console.log(counter)