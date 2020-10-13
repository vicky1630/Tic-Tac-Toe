//declaring my variables and reference points
const messageBox = document.querySelector("#message");
const greeting = "Player 1 goes first!"
let activeGame = true
let currentPlayerToken = "X"
let currentPlayer = "Player 1"
let scorePlayer1 = 0
let scorePlayer2 = 0
let score1 = document.querySelector("#score1")
let score2 = document.querySelector("#score2")
let gameInput = ["", "", "", "", "","", "", "", ""]
let mySquares = document.querySelectorAll('.square')
let newGameButton = document.querySelector("#resetButton")
let musicButtonOff = document.querySelector("#backgroundMusicOff")
let musicButtonOn = document.querySelector("#backgroundMusicOn")
const soundBackground = new Audio("assets/backgroundmusic.mp3")
const soundWholeNewGame = new Audio("assets/wholenewgame.mp3")
const weHaveAWinner = () => `${currentPlayer} won!`
const weHaveADraw = () => "Both Lose!"
const playerAlert = () => `${currentPlayer}'s Turn`
let wholeNewGame = document.querySelector("#newGame")


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

//Use my default greeting every time you load the page - the same greeting is used when you reset the game
messageBox.innerHTML = greeting

// The Game's Functions

//This will switch the players back and forth from player1(X) to player2(O). The token and user name is updated
const handlerPlayerSwitch = () => {
    currentPlayerToken= currentPlayerToken ==="X" ? "0" : "X"
    currentPlayer= currentPlayer === "Player 1" ? "Player 2" : "Player 1"
    messageBox.innerHTML = playerAlert()
}

//After every placement of the token (i.e. a square is clicked) we will check if that led to a winning line. At 
//the end of the check we also want to switch the players using the function above.
const handlerCheckGameStatus = () => {
    let gameOver = false;
    for (i=0; i<=7; i++) {
        const winningGame = winningLines[i];
        let box1 = gameInput[winningGame[0]];
        let box2 = gameInput[winningGame[1]];
        let box3 = gameInput[winningGame[2]];
        //are the boxes empty? if so, keep moving along.
        if (box1 === "" ||box2 === "" ||box3 === "") {
            continue
        //if the boxes equal all eachother tho then we have a winner and the game is over.
        } if (box1===box2 && box2===box3) {
            gameOver=true
            break
        } 
    }
//if we continue to this part then we either have a winner or the game ended in a draw. We end the game via thr activeGame variable. This 
//displays the message for the condition met. 
if (gameOver) {
    messageBox.innerHTML = weHaveAWinner()
    //This IF statement adds the 1 to the applicable player's score when they win (variables score1 and score2)
    if(currentPlayer == "Player 1") 
    scorePlayer1++;
else
scorePlayer2++;
    //This upates the HTML to be the current score
    score1.innerHTML = scorePlayer1
    score2.innerHTML = scorePlayer2

    activeGame = false
    //gives a winner sound and pauses the drop token sound
    const soundWinner = new Audio("assets/winner.mp3")
    soundWinner.play();
    return
}
//if no empty spaces are available then that means there was no winner - its a tie. We end the game via thr activeGame variable. 
let draw = !gameInput.includes("")
if (draw) {
    messageBox.innerHTML = weHaveADraw()
    activeGame = false
    
    //if draw, play the draw sound and I think its doing something to stop that last drop token sound - I can sort of hear it but can't 100% confirm. 
    //I think it sounds better so I'm keeping it.
    const soundDraw = new Audio("assets/draw.mp3")
    soundDraw.play();
    return
}
//make the player switch at the end of all this because if there was no winning match then its the next player's turn

handlerPlayerSwitch()

}

//This handler is used to push the selection to the gameInput Array. It also changes the message to alert which player is next or if we 
//have a winner. 
const handlerSquareClicked = (sqaure, index) => {
    gameInput[index] = currentPlayerToken;
    sqaure.innerHTML = currentPlayerToken;
}


//This handler is for when the square is selected for the user to place the token. I am taking the target and grabbing the data-cell-index value.
const handlerSelectSpot = (e) => {


    const selectedSqaure = e.target
    const selectedSqaureIndex = parseInt(selectedSqaure.getAttribute("data-cell-index"))
    //We use the selected index and check the "status" of that index. If the index is not empty or the game is no longer active via the activeGame 
    //variable then don't do anything?
    if (gameInput[selectedSqaureIndex] !== "" || !activeGame) {
        return
    }
    //If the index is empty in the gameInput array and the game is active then we will call the handler to insert the token to the array. 
    handlerSquareClicked(selectedSqaure,selectedSqaureIndex);
    //Then we go through the checks to see if there was a winner. If there was a winner then the game end with the winner message. If there is no winner then
    //the game continues with the nezt player's turn. If there's no more avaialble spaces on the frid then the draw message will appear. 
    handlerCheckGameStatus();
    //Adds sound for placing tokens
    const soundTokenDrop = new Audio("assets/tokendrop.mp3")
    soundTokenDrop.play();
}

//This section i for the reset button. The reset button allows users to clear the board for another game without having to refresh the page. 
const handlerRestart = () => {
    //Adds sound for clearing the board
    const soundClearBoard = new Audio("assets/newgame2.mp3")
    soundClearBoard.play();
    //makes the game active so majoirty of functions can work
    activeGame = true
    //we always start the game with X token and player 1
    currentPlayerToken = "X"
    //we always start with player 1 and the X token 
    currentPlayer = "Player 1"
    //resetting all of the indexes to "clear the board" essentially
    gameInput = ["", "", "", "", "","", "", "", ""]
    //insert a standard greeting
    messageBox.innerHTML = greeting
    //reset the squares on the screen to have no tokens on them
    mySquares.forEach(square => square.innerHTML = "")
}
//pause handler for background music
const handlerMusicOff = () => {
    soundBackground.pause();   
}
//play handler for background music
const handlerMusicOn = () => {
    soundBackground.play();   
}

const handlerNewGame = () => {
    location.reload()
}

//my buttons
//when you select any square you call the Select Spot handler which identifies which index it should take up in the gameInput array, if the index is available. 
mySquares.forEach(square => square.addEventListener("click", handlerSelectSpot))
//this is my "New Game" button. When this button is clicked it resets the board game and game status using the Restart Handler 
newGameButton.addEventListener("click", handlerRestart)
//these buttons turn the background music on and off
musicButtonOff.addEventListener("click", handlerMusicOff)
musicButtonOn.addEventListener("click", handlerMusicOn)
//whole new game button - clears player's scores
wholeNewGame.addEventListener("click", handlerNewGame)


