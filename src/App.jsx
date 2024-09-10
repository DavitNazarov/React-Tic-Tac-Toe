import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WInningCombinations";
import GameOver from "./components/GameOver";

// Starting game board with empty values 'null'
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// Player  Names & symbols
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// Find the active player based on the game turns
function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; // create a new copy of the board

  // Go through each move & set the player s symbol on the board [null]=> [X || O]
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard;
}

// Checking the winner, by comparing the board with winning combinations
function deriveWiner(gameBoard, playerNames) {
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // If the symbols are in the combination match, there is a winner
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      winner = playerNames[firstSquareSymbol];
  }
  return winner;
}

function App() {
  // store player names
  const [playerNames, setPlayerNames] = useState(PLAYERS);

  //store game moves (turns)
  const [gameTurns, setGameTurns] = useState([]);

  //Find the current active player
  const activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWiner(gameBoard, playerNames);

  // Check if the game is a draw (if it is 9 moves that means no winner)
  const isDraw = gameTurns.length === 9 && !winner;

  function handleSelectedSymbol(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const curentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }
  // new players state
  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  }

  return (
    <>
      <header>
        <img src="game-logo.png" alt="Tic tac toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <PlayerInfo
              initialName={playerNames.X}
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <PlayerInfo
              initialName={playerNames.O}
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || isDraw) && (
            <GameOver key={winner} winner={winner} onRestart={handleRestart} />
          )}
          <GameBoard onSelectSquare={handleSelectedSymbol} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
