const messageBox = document.querySelector("#message");

let currentPlayer = "X"

const playerAlert = () => `${currentPlayer}, it's your turn!`

messageBox.innerHTML = playerAlert();
console.log(messageBox);