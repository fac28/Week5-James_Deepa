export const Gameover = ({ restartGame, gameOver, setGameOver, score, highScore }) => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <h1>GAME OVER</h1>
        <button
          className='button'
          onClick={() => {
            setGameOver(!gameOver);
            restartGame(score, highScore);
          }}
        >
          {' '}
          Start Over
        </button>
      </div>
    </div>
  );
};
