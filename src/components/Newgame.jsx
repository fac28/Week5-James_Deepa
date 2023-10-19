export const Newgame = ({ restartGame, score, highScore }) => {
  return (
    <div>
      <button
        className='button'
        onClick={() => {
          restartGame(score, highScore);
        }}
      >
        {' '}
        New Game
      </button>
    </div>
  );
};
