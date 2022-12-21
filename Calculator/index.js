let firstNumber = 8
let secondNumber = 5
document.getElementById('first-no').textContent = firstNumber
document.getElementById('second-no').textContent = secondNumber
firstNumber.textContent = 8
secondNumber.textContent = 5
function add(){
    document.getElementById('action').textContent = 'Sum: '
    let answer = firstNumber + secondNumber
    document.getElementById('action').textContent = 'Sum: ' + answer
}
function subtract(){
    document.getElementById('action').textContent = 'Subtract: '
    let answer = firstNumber - secondNumber
    document.getElementById('action').textContent = 'Difference: ' + answer
}
function multiply(){
    document.getElementById('action').textContent = 'Multiply: '
    let answer = firstNumber * secondNumber
    document.getElementById('action').textContent = 'Product: ' + answer
}
function divide(){
    document.getElementById('action').textContent = 'Divide: '
    let answer = firstNumber / secondNumber
    document.getElementById('action').textContent = 'Divide: ' + answer
}