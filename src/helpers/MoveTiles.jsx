// Function to transpose a matrix (used for handling 'up' and 'down' directions)
export function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

export function getMergedTiles(tiles, score, updateScore) {
  let newScore = score;
  const mergedTiles = [];
  for (let i = 0; i < tiles.length; i++) {
    if (i < tiles.length - 1 && tiles[i] === tiles[i + 1]) {
      // Merge adjacent tiles when they are equal
      const newValue = Number(tiles[i]) * 2;
      newScore = newScore + newValue;
      mergedTiles.push(newValue);
      i++; // Skip the next tile since it's already merged
    } else {
      // Keep the tile as is
      mergedTiles.push(tiles[i]);
    }
  }
  updateScore(newScore);
  return mergedTiles;
}

export function checkDirection(mergedTiles, direction) {
  const emptyCells = 4 - mergedTiles.length;
  if (direction === 'right' || direction === 'down') {
    for (let i = 0; i < emptyCells; i++) {
      mergedTiles.unshift('');
    }
  } else if (direction === 'left' || direction === 'up') {
    for (let i = 0; i < emptyCells; i++) {
      mergedTiles.push('');
    }
  }
}

export const setMergedTiles = (direction, board, score, updateScore) => {
  for (let position = 0; position < board.length; position++) {
    const tiles = board[position].filter((tile) => tile !== '');
    const mergedTiles = getMergedTiles(tiles, score, updateScore);
    checkDirection(mergedTiles, direction);
    board[position] = mergedTiles;
  }
};
