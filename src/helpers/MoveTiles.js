export function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

export function getMergedTiles(tiles, score, setWinScore, winScore) {
  let newScore = score;
  const mergedTiles = [];
  for (let i = 0; i < tiles.length; i++) {
    if (i < tiles.length - 1 && tiles[i] === tiles[i + 1]) {
      const newValue = Number(tiles[i]) * 2;
      newScore = newScore + newValue;
      if (newValue == 2048) {
        setWinScore(!winScore);
      }
      mergedTiles.push(newValue);
      i++;
    } else {
      mergedTiles.push(tiles[i]);
    }
  }

  return [mergedTiles, newScore];
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

export const setMergedTiles = (direction, board, score, setScore, winScore, setWinScore) => {
  let newScore = score;
  for (let position = 0; position < board.length; position++) {
    const tiles = board[position].filter((tile) => tile !== '');
    const [mergedTiles, returnedScore] = getMergedTiles(tiles, newScore, winScore, setWinScore);
    checkDirection(mergedTiles, direction);
    board[position] = mergedTiles;
    newScore = returnedScore;
  }
  setScore(newScore);
};
