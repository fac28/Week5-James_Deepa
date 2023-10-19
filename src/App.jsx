import { useEffect, useState } from 'react';
import { Gameboard } from './components/Gameboard';
import { Score } from './components/Score';
import { Gameover } from './components/Gameover';
import { Win } from './components/Win';
import { Newgame } from './components/Newgame';
import './App.css';
import { useKeyTracking } from './hooks/keyTracking';
import { updateBoard } from './helpers/updateBoard';
import { generateRandomTile } from './helpers/generateRandomTile';
import { initialGameBoardState } from './helpers/constants';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [gameBoard, setGameBoard] = useLocalStorage('GAMEBOARD', initialGameBoardState);
  const [direction, setDirection] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useLocalStorage('SCORE', 0);
  const [winScore, setWinScore] = useState(false);
  const [highScore, setHighScore] = useLocalStorage('HIGHSCORETEST', 0);

  function restartGame(score, highScore) {
    if (score > highScore) {
      setHighScore(score);
    }
    setScore(0);
    setGameBoard(initialGameBoardState);
  }

  useKeyTracking(setDirection);

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
