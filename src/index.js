import Hangman from './hangman'
import getPuzzle from './requests'


const puzzleText = document.querySelector('#puzzle')
const remainingGuessesElement = document.querySelector('#guesses')
let game

window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode)
    game.makeGuess(guess)
    render()
})

const render = () => {
    puzzleText.innerHTML = ''
    remainingGuessesElement.textContent = game.statusMessage

    game.puzzle.split('').forEach((letter) => {
        const letterText = document.createElement('span')
        letterText.textContent = letter
        puzzleText.appendChild(letterText)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

