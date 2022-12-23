let myLink = []
const inputEl = document.getElementById("input-el")
const buttonEl = document.querySelector("#btn-save")
const buttonDelEl = document.querySelector("#btn-del")
const listEl = document.querySelector("#links-list")

const linkFromLocal = JSON.parse(localStorage.getItem("myLinks"))

if(linkFromLocal){
    myLink = linkFromLocal
    renderLinks()
}


buttonEl.addEventListener("click",()=>{
    if(!inputEl.value) return
    myLink.push(inputEl.value)
    localStorage.setItem("myLinks",JSON.stringify(myLink))
    renderLinks()
    inputEl.value = ""
})

buttonDelEl.addEventListener("click",()=>{
    localStorage.clear()
    myLink = []
    renderLinks()
})

function renderLinks(){
    listEl.innerHTML = ""
    if(!myLink) return
    myLink.forEach((Element)=>{
        listEl.innerHTML += `<a href="${Element}" target="_blank"><li>${Element}</li></a>`
    })
}
