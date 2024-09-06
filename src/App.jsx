import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
import Log from "./components/Log";

function App() {
  // Lifting State Up
  const [gameTurns, setGameTurns] = useState([]);
  const [curentPlayer, setCurentPlayer] = useState("X");

  function handleSelectedSymbol(rowIndex, colIndex) {
    setCurentPlayer((curentSymbol) => (curentSymbol === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let activePlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        activePlayer = "O";
      }

      const updatedTurns = [
        // object that has some properties
        // square property holds some nested objects as a value
        // player property holds symbols
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
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
              isActive={curentPlayer === "X"}
            />
            <PlayerInfo
              initialName="Player 2"
              symbol="O"
              isActive={curentPlayer === "O"}
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
