import { Gameboard } from './components/Gameboard';
import { keyTracking } from './helpers/keyTracking';
import './App.css';
import { useEffect, useState } from 'react';
import { updateBoard } from './helpers/updateBoard';
import { generateRandomTile } from './helpers/generateRandomTile';
import { initialGameBoardState, preGameOverBoardState } from './helpers/constants';
import { Gameover } from './components/Gameover';
import { Newgame } from './components/Newgame';
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
  keyTracking(updateDirection);
  return (
    <>
      <h1>2048</h1>
      <Gameboard gameBoard={gameBoard} />
      <Newgame setGameBoardState={setGameBoardState} />
      <Gameover
        setGameBoardState={setGameBoardState}
        gameOver={gameOver}
        updateGameOverState={updateGameOverState}
      />
      {/* <h1>New Game</h1> */}
    </>
  );
}

export default App;
