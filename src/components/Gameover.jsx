import { initialGameBoardState } from '../helpers/constants';

export const Gameover = ({ setGameBoardState, gameOver, updateGameOverState }) => {
  if (!gameOver) return;
  return (
    <div className='overlay'>
      <div className='modal'>
        <h1>GAME OVER</h1>
        <button
          className='button'
          onClick={() => {
            updateGameOverState(gameOver);
            setGameBoardState(initialGameBoardState);
          }}
        >
          {' '}
          Start Over
        </button>
      </div>
    </div>
  );
};
