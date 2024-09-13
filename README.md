# Tic-Tac-Toe Game

This project is a simple implementation of the **Tic-Tac-Toe** game using **React**. It allows two players to compete by marking squares on a 3x3 board, with the goal of getting three marks in a row (horizontally, vertically, or diagonally).

## Features

- **Two Players**: Player 1 uses "X" and Player 2 uses "O". Players can rename themselves.
- **Live Game Board**: The game board updates after each move.
- **Winner and Draw Detection**: The game detects a win or a draw automatically.
- **Game Log**: The game tracks and displays all moves made by the players.
- **Restart Game**: A button allows players to restart the game at any time.

## Components

- **App.jsx**: Manages the main game logic, including player names, game turns, and the active player. It also determines if there is a winner or if the game has ended in a draw.
- **GameBoard.jsx**: Renders the 3x3 grid and handles player clicks on each square.
- **PlayerInfo.jsx**: Displays player names and highlights the active player. It also allows players to change their names.
- **Log.jsx**: Shows the history of moves made during the game.

## How to Play

1. **Take turns**: Players take turns selecting empty squares on the game board.
2. **Winning**: The first player to align three symbols (X or O) in a row, column, or diagonal wins.
3. **Draw**: If all squares are filled and no player wins, the game ends in a draw.
4. **Restart**: Players can restart the game using the "Restart" button.

## Setup and Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Install the dependencies:
   ```bash
      npm i 
3. Start the development server:
     ```bash
       npm run dev
4. Open the game in your browser at http://localhost:3000.
