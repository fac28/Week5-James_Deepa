import { Gameboard } from './components/Gameboard';
import { KeyTracking } from './helpers/KeyTracking';
import './App.css';
import { useEffect, useState } from 'react';
import { updateBoard } from './helpers/UpdateBoard';
import { generateRandomTile } from './helpers/generateRandomTile';

function App() {
  const initialGameBoard = [
    ['', '', '', '2'],
    ['', '', '', ''],
    ['', '', '2', ''],
    ['', '', '', ''],
  ];
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [direction, setDirection] = useState('');
  function setGameBoardState(newGameBoard) {
    return setGameBoard(newGameBoard);
  }
  function updateDirection(newDirection) {
    setDirection(newDirection);
  }

  useEffect(() => {
    if (direction === '') return;
    function mergeAndGenerate(direction) {
      updateBoard(direction, gameBoard, (mergedBoard) => {
        if (JSON.stringify(mergedBoard) !== JSON.stringify(gameBoard)) {
          setGameBoardState(mergedBoard);
          generateRandomTile(mergedBoard, (newBoard) => {
            setGameBoardState(newBoard);
          });
        }
        setDirection('');
      });
    }
    mergeAndGenerate(direction);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <>
      <h1>2048</h1>
      <Gameboard gameBoard={gameBoard} />
      <KeyTracking updateDirection={updateDirection} />
    </>
  );
}

export default App;
