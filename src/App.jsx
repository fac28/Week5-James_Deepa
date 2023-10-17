import { Gameboard } from './assets/Gameboard';
import { KeyTracking } from './assets/KeyTracking';
import './App.css';
import { useEffect, useState } from 'react';
import { moveTiles } from './helpers/MoveTiles';

function App() {
  const initialGameBoard = [
    ['', '2', '', ''],
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
    moveTiles(direction, gameBoard, updateGameBoard);
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
