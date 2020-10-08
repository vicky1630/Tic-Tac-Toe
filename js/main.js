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
    currentPlayer= currentPlayer === "Player 1" ? "Player 2" : "Player 1"
    messageBox.innerHTML = playerAlert()
}

const handlerCheckGameStatus = () => {
    let gameOver = false;
    for (i=0; i<=7; i++) {
        const winningGame = winningLines[i];
        let box1 = gameInput[winningGame[0]];
        let box2 = gameInput[winningGame[1]];
        let box3 = gameInput[winningGame[2]];
        if (box1 === "" ||box2 === "" ||box3 === "") {
            continue
        } if (box1===box2 && box2===box3) {
            gameOver=true
            break
        }
    }
if (gameOver) {
    messageBox.innerHTML = weHaveAWinner()
    activeGame = false
    return
}
let draw = !gameInput.includes("")
if (draw) {
    messageBox.innerHTML = weHaveADraw()
    activeGame = false
    return
}
handlerPlayerSwitch()

}

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
    handlerCheckGameStatus();
}

const handlerRestart = () => {
    activeGame = true
    currentPlayerToken = "X"
    currentPlayer = "Player 1"
    gameInput = ["", "", "", "", "","", "", "", ""]
    messageBox.innerHTML = greeting
    mySquares.forEach(square => square.innerHTML = "")
}

mySquares.forEach(square => square.addEventListener("click", handlerSelectSpot))
newGameButton.addEventListener("click", handlerRestart)