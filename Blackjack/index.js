let firstCard = 11
let secondCard = 2

let sum = firstCard + secondCard

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
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard 
    if(sum <= 20){
        console.log("Do you want to draw another card?")
        message = "Do you want to draw another card?"
    }else if(sum === 21){
        console.log("You've got a Blackjack")
        message = "You've got a Blackjack"
        hasBlackjack = true
    }else{
        isAlive = false
        message = "You lose"
    }
    messageEl.textContent = message
}

function newCard(){
    let newCard = 12
    sum += newCard
    renderGame()
}

console.log(message)