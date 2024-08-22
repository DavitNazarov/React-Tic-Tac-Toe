import GameBoard from "./components/GameBoard";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <>
      <header>
        <img src="game-logo.png" alt="Tic tac toe game board" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <PlayerInfo initialName="Player 1" symbol="X" />
            <PlayerInfo initialName="Player 2" symbol="0" />
          </ol>
          <GameBoard />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
