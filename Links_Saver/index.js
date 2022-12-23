let myLink = []
const inputEl = document.getElementById("input-el")
const buttonEl = document.querySelector("#btn-save")
const buttonDelEl = document.querySelector("#btn-del")
const buttonTab = document.querySelector("#btn-tab")
const listEl = document.querySelector("#links-list")

const linkFromLocal = JSON.parse(localStorage.getItem("myLinks"))

if(linkFromLocal){
    myLink = linkFromLocal
    renderLinks(myLink)
}


buttonEl.addEventListener("click",()=>{
    if(!inputEl.value) return
    myLink.push(inputEl.value)
    localStorage.setItem("myLinks",JSON.stringify(myLink))
    renderLinks(myLink)
    inputEl.value = ""
})

buttonDelEl.addEventListener("click",()=>{
    localStorage.clear()
    myLink = []
    renderLinks(myLink)
})

buttonTab.addEventListener("click",()=>{
    // let activeTab
    chrome.tabs.queury({active:true,currentWindow:true},function(tabs){
        // activeTab = tabs[0]
        myLink.push(tabs[0])
        localStorage.setItem("myLinks",JSON.stringify(myLink))
        renderLinks(myLink)
    })
    
})

function renderLinks(links){
    listEl.innerHTML = ""
    if(!myLink) return
    links.forEach((Element)=>{
        listEl.innerHTML += `<a href="${Element}" target="_blank"><li>${Element}</li></a>`
    })
}
