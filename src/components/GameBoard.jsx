const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, turns }) => {
  // deriving state
  // gameBoard is computed value, that is derived from some state. in this case from the gameTurns state that is managed in app.jsx component
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // const [gemeboard, setGemeboard] = useState(initialGameBoard);

  // // update game board for every clicked button
  // const handleClick = (rowIndex, colIndex) => {
  //   setGemeboard((prev) => {
  //     const updateBoard = [...prev.map((initialArray) => [...initialArray])];
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });
  //   onSelectSquare();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
