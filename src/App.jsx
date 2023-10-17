import { Gameboard } from './components/Gameboard';
import { KeyTracking } from './components/KeyTracking';
import './App.css';
import { useEffect, useState } from 'react';
import { updateBoard } from './helpers/UpdateBoard';

function App() {
  const initialGameBoard = [
    ['2', '2', '2', '2'],
    ['', '', '', ''],
    ['', '', '2', ''],
    ['', '', '', ''],
  ];
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [direction, setDirection] = useState('');
  function updateGameBoard(GameBoard) {
    setGameBoard(GameBoard);
  }
  function updateDirection(direction) {
    setDirection(direction);
  }
  // moveTiles(direction, gameBoard, updateGameBoard);
  useEffect(() => {
    if (direction === '') return;
    updateBoard(direction, gameBoard, updateGameBoard);
    setDirection('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);
  return (
    <>
      <h1>2048</h1>
      <Gameboard gameBoard={gameBoard} />
      <KeyTracking direction={direction} updateDirection={updateDirection} />
    </>
  );
}

export default App;
