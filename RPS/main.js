const compcd = document.getElementById('compc')
const usercd = document.getElementById('userc')
const result = document.getElementById('res')

const choices = document.querySelectorAll("button")
let userChoice
let computerChoice
let resultt


choices.forEach(choices => choices.addEventListener('click', (e) => {
    userChoice = e.target.id
    usercd.innerHTML = userChoice
    genoutput()
    getResult()
}))


function genoutput() {
    const rand = Math.floor(Math.random() * choices.length) + 1
    console.log(rand)

    if (rand === 1) {
        computerChoice = "rock"
    }

    else if (rand === 2) {
        computerChoice = "scissors"
    }

    else {
        computerChoice = "paper"
    }
    compcd.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        resultt = "Tie!"
    }

    else if (computerChoice === "rock" && userChoice === "paper") {
        resultt = "You Won!"
    }

    else if (computerChoice === "rock" && userChoice === "scissors") {
        resultt = "You Lost!"
    }

    else if (computerChoice === "paper" && userChoice === "scissors") {
        resultt = "You Won!"
    }

    else if (computerChoice === "paper" && userChoice === "rock") {
        resultt = "You Lost!"
    }

    else if (computerChoice === "scissors" && userChoice === "rock") {
        resultt = "You Won!"
    }

    else if (computerChoice === "scissors" && userChoice === "paper") {
        resultt = "You Lost!"
    }
    result.innerHTML = resultt


}

console.log(choices)