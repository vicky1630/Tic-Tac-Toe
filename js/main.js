//declaring my variables and reference points
const messageBox = document.querySelector("#message");
const greeting = "Player 1 goes first!"
let activeGame = true
let currentPlayerToken = "X"
let currentPlayer = "Player 1"
let gameInput = ["", "", "", "", "","", "", "", ""]
let mySquares = document.querySelectorAll('.square')
let newGameButton = document.querySelector("#resetButton")
const weHaveAWinner = () => `${currentPlayer} won!`
const weHaveADraw = () => "Both Lose!"
const playerAlert = () => `${currentPlayer}'s Turn`

const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


const handlerPlayerSwitch = () => {
    currentPlayerToken= currentPlayerToken ==="X" ? "0" : "X"
    messageBox.innerHTML = playerAlert()
}

//

const handlerSquareClicked = (sqaure, index) => {
    messageBox.innerHTML = playerAlert();
    gameInput[index] = currentPlayerToken;
    sqaure.innerHTML = currentPlayerToken;
}


const handlerSelectSpot = (e) => {
    const selectedSqaure = e.target
    const selectedSqaureIndex = parseInt(selectedSqaure.getAttribute("data-cell-index"))
    if (gameInput[selectedSqaureIndex] !== "" || !activeGame) {
        return
    }
    handlerSquareClicked(selectedSqaure,selectedSqaureIndex);
}

const handlerRestart = () => {
    mySquares.forEach(square => square.innerHTML = "")
}

mySquares.forEach(square => square.addEventListener("click", handlerSelectSpot))
newGameButton.addEventListener("click", handlerRestart)


