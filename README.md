<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <h1 id="title">RAHAT CREATION</h1> <!-- Title changed to RAHAT CREATION -->
        <div id="game-board" class="board">
            <div class="cell" data-cell="0"></div>
            <div class="cell" data-cell="1"></div>
            <div class="cell" data-cell="2"></div>
            <div class="cell" data-cell="3"></div>
            <div class="cell" data-cell="4"></div>
            <div class="cell" data-cell="5"></div>
            <div class="cell" data-cell="6"></div>
            <div class="cell" data-cell="7"></div>
            <div class="cell" data-cell="8"></div>
        </div>
        <button id="reset-button">Reset Game</button>
        <div id="status-container">
            <p id="status"></p> <!-- Status text moved here -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
