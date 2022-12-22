let firstCard = 11
let secondCard = 8

if((firstCard+secondCard) < 21){
    console.log("Do you want to draw another card?")
}else if((firstCard+secondCard) ===21){
    console.log("You've got a Blackjack")
}else{
    console.log("You lose")
}