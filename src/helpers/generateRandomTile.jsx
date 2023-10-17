export const generateRandomTile = (gameBoard, updateGameBoard) => {
  const newGameBoard = [...gameBoard];
  const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
  const emptyCells = indexOfAll(newGameBoard.flat(), '');
  if (emptyCells.length === 0) {
    return;
  }
  const indexChoice = Math.floor(Math.random() * emptyCells.length);
  const rowIndex = Math.floor(emptyCells[indexChoice] / 4);
  const columnIndex = emptyCells[indexChoice] % 4;
  newGameBoard[rowIndex][columnIndex] = '2';
  updateGameBoard(newGameBoard);
};
