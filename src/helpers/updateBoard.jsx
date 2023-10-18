import { transpose, setMergedTiles } from './MoveTiles';

export const updateBoard = (
  direction,
  gameBoard,
  score,
  updateScore,
  winScore,
  updateWinScore,
  setGameBoardState,
) => {
  const newGameBoard = [...gameBoard];
  if (direction === 'left' || direction === 'right') {
    setMergedTiles(direction, newGameBoard, score, updateScore, winScore, updateWinScore);
  } else if (direction === 'up' || direction === 'down') {
    // Transpose the board for easier processing
    const transposedBoard = transpose(newGameBoard);

    // Move tiles up or down
    setMergedTiles(direction, transposedBoard, score, updateScore, winScore, updateWinScore);

    // Transpose the board back to its original orientation
    return setGameBoardState(transpose(transposedBoard));
  }
  // Set the state with the updated game board
  setGameBoardState(newGameBoard);
};
