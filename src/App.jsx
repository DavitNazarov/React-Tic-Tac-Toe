import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <PlayerInfo initialName="Player 1" symbol="X" />
          <PlayerInfo initialName="Player 2" symbol="0" />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
