import { transpose, setMergedTiles } from './MoveTiles';

export const updateBoard = (
  direction,
  gameBoard,
  score,
  setScore,
  winScore,
  setWinScore,
  setGameBoard,
) => {
  const newGameBoard = [...gameBoard];
  if (direction === 'left' || direction === 'right') {
    setMergedTiles(direction, newGameBoard, score, setScore, winScore, setWinScore);
  } else if (direction === 'up' || direction === 'down') {
    // Transpose the board for easier processing
    const transposedBoard = transpose(newGameBoard);

    // Move tiles up or down
    setMergedTiles(direction, transposedBoard, score, setScore, winScore, setWinScore);

    // Transpose the board back to its original orientation
    return setGameBoard(transpose(transposedBoard));
  }
  // Set the state with the updated game board
  setGameBoard(newGameBoard);
};
