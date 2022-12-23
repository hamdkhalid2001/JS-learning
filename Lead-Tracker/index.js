const myLink = []
const inputEl = document.getElementById("input-el")
const buttonEl = document.querySelector(".btn")
const listEl = document.querySelector("#links-list")

buttonEl.addEventListener("click",()=>{
    if(!inputEl.value) return
    myLink.push(inputEl.value)
    renderLinks()
    inputEl.value = ""
})

function renderLinks(){
    // const newLink = document.createElement('li');
    // newLink.innerText = item
    // listEl.insertAdjacentElement("beforeend",newLink)
    listEl.innerHTML += `<a href="${inputEl.value}" target="_blank"><li>${inputEl.value}</li></a>`
    
}
