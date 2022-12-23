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
    if(!inputEl.value || myLink.includes(inputEl.value)) return
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
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        // activeTab = tabs[0]
        myLink.push(tabs[0].url)
        localStorage.setItem("myLinks",JSON.stringify(myLink))
        renderLinks(myLink)
    })
    
})

function deleteLink(linkId){
    let deleteEl = document.querySelector("#"+linkId)
    myLink = myLink.filter((Element)=>{
        return deleteEl.textContent != Element
    })
    localStorage.setItem("myLinks",JSON.stringify(myLink))
    renderLinks(myLink)
}

function renderLinks(links){
    listEl.innerHTML = ""
    if(!myLink) return
    links.forEach((Element,index)=>{
        listEl.innerHTML += `<div>
                                <a href="${Element}" target="_blank"><li id="list-item${index}">${Element}</li></a>
                                <p class="remove-btn" onclick="deleteLink('list-item${index}')">Remove</p>
                            </div>`
    })
}
