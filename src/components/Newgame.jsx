import { initialGameBoardState } from '../helpers/constants';

export const Newgame = ({ restartGame, score, highScore }) => {
  return (
    <div>
      <button
        className='button'
        onClick={() => {
          restartGame(initialGameBoardState, score, highScore);
        }}
      >
        {' '}
        New Game
      </button>
    </div>
  );
};
