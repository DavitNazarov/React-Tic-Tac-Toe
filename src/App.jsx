import { useState } from "react";
import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";
function App() {
  // Lifting State Up
  const [curentPlayer, setCurentPlayer] = useState("X");

  function handleSelectedSymbol() {
    setCurentPlayer((curentSymbol) => (curentSymbol === "X" ? "O" : "X"));
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
          <GameBoard
            onSelectSquare={handleSelectedSymbol}
            activePlayerSymbol={curentPlayer}
          />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
