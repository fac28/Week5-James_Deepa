import { useEffect, useState } from 'react';
import { Gameboard } from './components/Gameboard';
import { Score } from './components/Score';
import { Gameover } from './components/Gameover';
import { Win } from './components/Win';
import { Newgame } from './components/Newgame';
import './App.css';
import { useKeyTracking } from './utils/keyTracking';
import { updateBoard } from './helpers/updateBoard';
import { generateRandomTile } from './helpers/generateRandomTile';
import { initialGameBoardState } from './helpers/constants';

function App() {
  const [gameBoard, setGameBoard] = useState(() => {
    const localGameBoard = localStorage.getItem('GAMEBOARD');
    if (localGameBoard == null) return initialGameBoardState;
    return JSON.parse(localGameBoard);
  });
  const [direction, setDirection] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(() => {
    const localScore = localStorage.getItem('SCORE');
    if (localScore == null) return 0;
    return JSON.parse(localScore);
  });
  const [winScore, setWinScore] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    const localHighScore = localStorage.getItem('HIGHSCORETEST');
    if (localHighScore == null) return 0;
    return JSON.parse(localHighScore);
  });

  function restartGame(score, highScore) {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setGameBoard(initialGameBoardState);
  }

  useEffect(() => {
    localStorage.setItem('HIGHSCORETEST', JSON.stringify(highScore));
  }, [highScore]);
  useKeyTracking(setDirection);

  useEffect(() => {
    localStorage.setItem('GAMEBOARD', JSON.stringify(gameBoard));
    localStorage.setItem('SCORE', JSON.stringify(score));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameBoard]);

  useEffect(() => {
    if (direction === '') return;
    function mergeAndGenerate(direction) {
      updateBoard(direction, gameBoard, score, setScore, setWinScore, winScore, (mergedBoard) => {
        if (JSON.stringify(mergedBoard) !== JSON.stringify(gameBoard)) {
          setGameBoard(mergedBoard);
          generateRandomTile(mergedBoard, (newBoard) => {
            setGameBoard(newBoard);
          });
        } else if (!gameBoard.flat().includes('') && !gameOver) {
          setGameOver(!gameOver);
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
      <Newgame restartGame={restartGame} score={score} highScore={highScore} />
      {gameOver && (
        <Gameover
          restartGame={restartGame}
          gameOver={gameOver}
          setGameOver={setGameOver}
          score={score}
          highScore={highScore}
        />
      )}
      {winScore && (
        <Win
          restartGame={restartGame}
          score={score}
          highScore={highScore}
          setWinScore={setWinScore}
          winScore={winScore}
        />
      )}
      <Score score={score} highScore={highScore} />
      {/* <h1>New Game</h1> */}
    </>
  );
}

export default App;
