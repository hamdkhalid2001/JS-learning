let cards = []

let sum = 0

let hasBlackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-heading")
messageEl.textContent = 'Want to play a round?'

let sumEl = document.querySelector("#sumEl")
let cardsEl = document.querySelector(".cardsEl")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    sumEl.textContent = `Sum: ${sum}`
    cards.forEach((element)=>{
        cardsEl.textContent += element + " "
    })
    if(sum <= 20){
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        message = "You've got a Blackjack"
        hasBlackjack = true
    }else{
        isAlive = false
        message = "You lose"
    }
    messageEl.textContent = message
}

function newCard(){
    let newCard = getRandomCard()
    sum += newCard
    cards.push(getRandomCard())
    renderGame()
}

function getRandomCard(){
    // if 1 then return 11
    // if 11-13 then return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1) return 11
    if(randomNumber > 10) return 10
    return randomNumber 
} 

console.log(message)