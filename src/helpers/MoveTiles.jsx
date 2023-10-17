export const moveTiles = (direction, gameBoard, updateGameBoard) => {
  const newGameBoard = [...gameBoard];

  if (direction === 'left' || direction === 'right') {
    // Move tiles left or right
    for (let row = 0; row < newGameBoard.length; row++) {
      const tiles = newGameBoard[row].filter((tile) => tile !== '');
      const emptyCells = 4 - tiles.length;

      if (direction === 'right') {
        for (let i = 0; i < emptyCells; i++) {
          tiles.unshift('');
        }
      } else if (direction === 'left') {
        for (let i = 0; i < emptyCells; i++) {
          tiles.push('');
        }
      }

      newGameBoard[row] = tiles;
    }
  } else if (direction === 'up' || direction === 'down') {
    // Transpose the board for easier processing
    const transposedBoard = transpose(newGameBoard);

    // Move tiles up or down
    for (let col = 0; col < transposedBoard.length; col++) {
      const tiles = transposedBoard[col].filter((tile) => tile !== '');
      const emptyCells = 4 - tiles.length;

      if (direction === 'down') {
        for (let i = 0; i < emptyCells; i++) {
          tiles.unshift('');
        }
      } else if (direction === 'up') {
        for (let i = 0; i < emptyCells; i++) {
          tiles.push('');
        }
      }

      transposedBoard[col] = tiles;
    }

    // Transpose the board back to its original orientation
    return updateGameBoard(transpose(transposedBoard));
  }

  // Set the state with the updated game board
  updateGameBoard(newGameBoard);
};

// Function to transpose a matrix (used for handling 'up' and 'down' directions)
function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}
