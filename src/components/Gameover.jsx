import { initialGameBoardState } from '../helpers/constants';

export const Gameover = ({ restartGame, gameOver, updateGameOverState, score, highScore }) => {
  if (!gameOver) return;
  return (
    <div className='overlay'>
      <div className='modal'>
        <h1>GAME OVER</h1>
        <button
          className='button'
          onClick={() => {
            updateGameOverState(gameOver);
            restartGame(initialGameBoardState, score, highScore);
          }}
        >
          {' '}
          Start Over
        </button>
      </div>
    </div>
  );
};
