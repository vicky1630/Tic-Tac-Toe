const messageBox = document.querySelector("#message");

let currentPlayer = "X"
let gameInput = ["", "", "", "", "","", "", "", ""]

const weHaveAWinner = () => `${currentPlayer} won!`
const weHaveADraw = () => "It's a Draw! No Winner!"
const playerAlert = () => `${currentPlayer}, it's your turn!`

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



//console.log(messageBox);