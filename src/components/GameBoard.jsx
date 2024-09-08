const GameBoard = ({ onSelectSquare, board }) => {
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
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
