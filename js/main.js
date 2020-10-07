
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

//These combinations are winning lines in a 3X3 grid
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

//need to be able to go back and forth from player 1 and player 2 - at the end of each turn and have variable that gets updated as the last step in the function.

//need to reset the whole game witout refreshing page. How do I get the button to reset everything? Get it to load the page? 

//determine a winner. Above are the possible lines (across, down and diagnol). I can assign each index a new varaible and if the variables have three then it checks for a completed line,
//if they all match then there is a winner and whoever's turn it is is the winner. 

//I'll have to make an array (gameInput) that stores input. Maybe it stores everyone and then the odds are player 2 and the evens are player 1? Then from there I can check the values from the winning
//llines table above. 

//I don't think clicking on a button that is already a button should be a problem but I will look into how to do it. Its probably a not null type of thing. 

//Update my message board with innerHTML