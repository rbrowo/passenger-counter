let savePas = document.getElementById("save-pas")
let countPas = document.getElementById("count-pas")
let count = 0

function increment() {
    count += 1
    countPas.textContent = count
}

function save() {
    let countStr = count + " - "
    savePas.textContent += countStr
    countPas.textContent = 0
    count = 0
}