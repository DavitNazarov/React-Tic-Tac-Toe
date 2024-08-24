import { useState } from "react";

const initialRow = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gemeboard, setGemeboard] = useState(initialRow);

  const handleClick = (rowI, colI) => {
    setGemeboard((prev) => {
      const updateBoard = [...prev.map((initialArray) => [...initialArray])];
      updateBoard[rowI][colI] = activePlayerSymbol;
      return updateBoard;
    });
    onSelectSquare();
  };
  return (
    <ol id="game-board">
      {gemeboard.map((row, rowI) => (
        <li key={rowI}>
          <ol>
            {row.map((col, colI) => (
              <li key={colI}>
                <button onClick={() => handleClick(rowI, colI)}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
