let grid = document.querySelectorAll(".square")

const message = document.getElementById("prompt")
const message2 = document.getElementById("prompt2")

let gameBoard = Array(9).fill(null)

let O = "O"
let X = "X"
let player = "X"

const selected = (e) => {
    const id = e.target.id
    if (!gameBoard[id]) {
        gameBoard[id] = player
        e.target.innerText = player
        if (winCheck()) {
            gameResults()  
        } else if (!gameBoard.some(e => e == null))
            gameResults("Draw")
            
    }
    if (player == O) {
        player = X
        message.innerText = "Player X's turn."
    } else if (player == X) {
        player = O
        message.innerText = "Player O's turn."
    } 
}



// 012
// 345
// 678
// win combos: 012, 345, 678, 036, 147, 258, 048, 246

const winCheck = () => {
    if (player == gameBoard[0] && gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]) { 
        return true
    } else if (player == gameBoard[3] && gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]) {
        return true
    } else if (player == gameBoard[6] && gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]) {
        return true
    } else if (player == gameBoard[0] && gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]) {
        return true
    } else if (player == gameBoard[1] && gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]) {
        return true
    } else if (player == gameBoard[2] && gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]) {
        return true
    } else if (player == gameBoard[0] && gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]) {
        return true
    } else if (player == gameBoard[2] && gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]) {
        return true
    } else {
        return false
    }
}

const gameResults = (result) => {
    if (result == "Draw") {
        message2.innerText = "Draw!"
    } else if (result != "Draw") {
        message2.innerText = `Player ${player} wins!`
    }
    grid.forEach((square) => square.removeEventListener("click", selected))
}

grid.forEach((square) => square.addEventListener("click", selected))


const reset = document.getElementById("reset")

const reload = () => {
    for (let i = 0; i < 9; i++) {
        gameBoard[i] = null
        grid[i].innerText = null
        message2.innerText = "Click any space to begin."
    }
    grid.forEach((square) => square.addEventListener("click", selected))
}
reset.addEventListener("click", reload)