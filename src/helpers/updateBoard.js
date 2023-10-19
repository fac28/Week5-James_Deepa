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
    const transposedBoard = transpose(newGameBoard);

    setMergedTiles(direction, transposedBoard, score, setScore, winScore, setWinScore);

    return setGameBoard(transpose(transposedBoard));
  }

  setGameBoard(newGameBoard);
};
