import { transpose, setMergedTiles } from "./MoveTiles";

export const updateBoard = (direction, gameBoard, updateGameBoard) => {
  const newGameBoard = [...gameBoard];
  if (direction === 'left' || direction === 'right') {
    setMergedTiles(direction, newGameBoard);
  } else if (direction === 'up' || direction === 'down') {
    // Transpose the board for easier processing
    const transposedBoard = transpose(newGameBoard);

    // Move tiles up or down
    setMergedTiles(direction, transposedBoard);

    // Transpose the board back to its original orientation
    return updateGameBoard(transpose(transposedBoard));
  }

  // Set the state with the updated game board
  updateGameBoard(newGameBoard);
};

