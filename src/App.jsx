import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // Lifting State Up
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectedSymbol(rowIndex, colIndex) {
    // setActivePlayer((curentSymbol) => (curentSymbol === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const curentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        // object that has some properties
        // square property holds some nested objects as a value
        // player property holds symbols
        { square: { row: rowIndex, col: colIndex }, player: curentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
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
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <PlayerInfo
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard onSelectSquare={handleSelectedSymbol} turns={gameTurns} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
