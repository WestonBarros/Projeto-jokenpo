
const result = document.querySelector('.result')

const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreValue = 0
let machineScoreValue = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissoers'
}

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === 'rock' && machine === 'scissors') || (human === 'paper' && machine === 'rock') || (human === 'scissors' && machine === 'paper')) {
        humanScoreValue++
        humanScore.innerHTML = humanScoreValue
        result.innerHTML = "Voçê ganhou!"
    } else {
        machineScoreValue++
        machineScore.innerHTML = machineScoreValue
        result.innerHTML = "Voçê perdeu!"
    }
}

