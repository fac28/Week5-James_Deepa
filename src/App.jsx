import { useEffect, useState } from 'react';
import { Gameboard } from './components/Gameboard';
import { Score } from './components/Score';
import { Gameover } from './components/Gameover';
import { Newgame } from './components/Newgame';
import './App.css';
import { keyTracking } from './helpers/keyTracking';
import { updateBoard } from './helpers/updateBoard';
import { generateRandomTile } from './helpers/generateRandomTile';
import { initialGameBoardState, preGameOverBoardState } from './helpers/constants';
function App() {
  const [gameBoard, setGameBoard] = useState(preGameOverBoardState);
  const [direction, setDirection] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  function setGameBoardState(newGameBoard) {
    return setGameBoard(newGameBoard);
  }
  function updateDirection(newDirection) {
    setDirection(newDirection);
  }
  function updateGameOverState(toggleGameOver) {
    setGameOver(!gameOver);
  }
  function updateScore(newScore) {
    setScore(newScore);
  }
  function restartGame(newGameBoard, score, highScore) {
    if (score > highScore) {
      setHighScore(score);
    }
    updateScore(0);
    setGameBoardState(newGameBoard);
  }
  useEffect(() => {
    if (direction === '') return;
    function mergeAndGenerate(direction) {
      updateBoard(direction, gameBoard, score, updateScore, (mergedBoard) => {
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
      <Newgame restartGame={restartGame} score={score} highScore={highScore} />
      <Gameover
        restartGame={restartGame}
        gameOver={gameOver}
        updateGameOverState={updateGameOverState}
        score={score}
        highScore={highScore}
      />
      <Score score={score} highScore={highScore} />
      {/* <h1>New Game</h1> */}
    </>
  );
}

export default App;
