let myLink = []
const inputEl = document.getElementById("input-el")
const buttonEl = document.querySelector(".btn")
const listEl = document.querySelector("#links-list")

renderLinks()

buttonEl.addEventListener("click",()=>{
    if(!inputEl.value) return
    myLink.push(inputEl.value)
    localStorage.setItem("myLinks",JSON.stringify(myLink))
    renderLinks()
    inputEl.value = ""
})

function renderLinks(){
    myLink = JSON.parse(localStorage.getItem("myLinks"))
    listEl.innerHTML = ""
    myLink.forEach((Element)=>{
        listEl.innerHTML += `<a href="${Element}" target="_blank"><li>${Element}</li></a>`
    })
    
}
