let count = 0
let totalPeople = document.getElementById('total-people')
let prevEntries = document.getElementById('entries')
function increment(){
    count = count + 1
    totalPeople.innerText = count;
}

function save(){
    prevEntries.textContent +=   count + " - ";
    count = 0
    totalPeople.innerText = count;
}