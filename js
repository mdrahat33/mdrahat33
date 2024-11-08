const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const checkWinner = () => {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Loop through all winning combinations to check for a winner
    for (let combination of winningCombination) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            statusText.textContent = `${currentPlayer} Wins!`;
            return;
        }
    }

    // Check if there is a draw (no empty spaces left)
    if (!board.includes(null)) {
        gameActive = false;
        statusText.textContent = 'It\'s a Draw!';
    }
};

const handleClick = (e) => {
    const cellIndex = e.target.dataset.cell;

    // If the cell is already filled or the game is not active, return early
    if (board[cellIndex] || !gameActive) return;

    // Fill the cell with the current player's symbol (X or O)
    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    // Check for a winner or a draw
    checkWinner();

    // Switch to the next player (X -> O or O -> X)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    // Reset the game state
    board = Array(9).fill(null);
    gameActive = true;

    // Clear the board display
    cells.forEach(cell => {
        cell.textContent = '';  // Remove text from cells
    });

    // Reset the status message
    statusText.textContent = '';
    currentPlayer = 'X'; // Start with player X
};

// Attach event listeners to each cell for the click event
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

// Attach event listener to the reset button
resetButton.addEventListener('click', resetGame);const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let board = Array(9).fill(null);
let gameActive = true;

const checkWinner = () => {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Loop through all winning combinations to check for a winner
    for (let combination of winningCombination) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            statusText.textContent = `${currentPlayer} Wins!`;
            return;
        }
    }

    // Check if there is a draw (no empty spaces left)
    if (!board.includes(null)) {
        gameActive = false;
        statusText.textContent = 'It\'s a Draw!';
    }
};

const handleClick = (e) => {
    const cellIndex = e.target.dataset.cell;

    // If the cell is already filled or the game is not active, return early
    if (board[cellIndex] || !gameActive) return;

    // Fill the cell with the current player's symbol (X or O)
    board[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    // Check for a winner or a draw
    checkWinner();

    // Switch to the next player (X -> O or O -> X)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const resetGame = () => {
    // Reset the game state
    board = Array(9).fill(null);
    gameActive = true;

    // Clear the board display
    cells.forEach(cell => {
        cell.textContent = '';  // Remove text from cells
    });

    // Reset the status message
    statusText.textContent = '';
    currentPlayer = 'X'; // Start with player X
};

// Attach event listeners to each cell for the click event
cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

// Attach event listener to the reset button
resetButton.addEventListener('click', resetGame);
