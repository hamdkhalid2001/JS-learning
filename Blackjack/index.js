let cards = []

let sum = 0

let hasBlackjack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-heading")
messageEl.textContent = 'Want to play a round?'

let sumEl = document.querySelector("#sumEl")
let cardsEl = document.querySelector(".cardsEl")

let player = {
    name:"XYZ",
    chips:"145"
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame(){
    isAlive = true
    cards[0] = getRandomCard()
    cards[1] = getRandomCard()
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    sumEl.textContent = `Sum: ${sum}`
    cards.forEach((element)=>{
        cardsEl.textContent += element + "  "
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
    if(!isAlive && hasBlackjack) return
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


// Practice problems for objects and functions
// const person = {
//     name:"Hamd",
//     age:21,
//     country:"Pakistan"
// }

// function logData(){
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }
// logData()

//Practice problems for conditional statements
// let age = 68;

// if(age < 6){
//     console.log("Free")
// }else if(age <= 17){
//     console.log("Child discount")
// }else if(age <= 26){
//     console.log("Student discount")
// }else if(age <= 66){
//     console.log("Full Price")
// }else{
//     console.log("Senior Citizen")
// }

//Practice problems for loops and arrays

// const populatedCountries = ["China","India","USA","Indonesia","Pakistan"]

// console.log("The 5 largest countries in the world")
// populatedCountries.forEach((element)=>{
//     console.log("- " + element)
// })

// const populatedCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]
// populatedCountries.pop()
// populatedCountries.push("Pakistan")
// populatedCountries.shift()
// populatedCountries.unshift("China")

//Practice problem for logical operators
// let dayOfMonth = 13
// let weekDay = "Friday"
// if(dayOfMonth === 13 && weekDay === "Friday") console.log("Oops")

//Rock paper scissor problem
// const hands = ["rock" , "paper" , "scissors"]

// function doTurn(){
//     return hands[Math.floor(Math.random() *3)]
// }

// console.log(doTurn())