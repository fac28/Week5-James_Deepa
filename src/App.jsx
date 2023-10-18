import { Gameboard } from './components/Gameboard';
import { KeyTracking } from './components/KeyTracking';
import './App.css';
import { useEffect, useState } from 'react';
import { updateBoard } from './helpers/updateBoard';
import { generateRandomTile } from './helpers/generateRandomTile';
import { initialGameBoardState, preGameOverBoardState } from './helpers/constants';
import { Gameover } from './components/Gameover';
function App() {
  const [gameBoard, setGameBoard] = useState(preGameOverBoardState);
  const [direction, setDirection] = useState('');
  const [gameOver, setGameOver] = useState(false);
  function setGameBoardState(newGameBoard) {
    return setGameBoard(newGameBoard);
  }
  function updateDirection(newDirection) {
    setDirection(newDirection);
  }
  function updateGameOverState(toggleGameOver) {
    setGameOver(!gameOver);
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
        } else if (!gameBoard.flat().includes('') && !gameOver) {
          updateGameOverState(gameOver);
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
      <Gameover
        setGameBoardState={setGameBoardState}
        gameOver={gameOver}
        updateGameOverState={updateGameOverState}
      />
    </>
  );
}

export default App;
