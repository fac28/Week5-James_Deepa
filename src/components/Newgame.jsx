import { initialGameBoardState } from '../helpers/constants';

export const Newgame = ({ setGameBoardState }) => {
  return (
    <div>
      <button
        className='button'
        onClick={() => {
          setGameBoardState(initialGameBoardState);
        }}
      >
        {' '}
        New Game
      </button>
    </div>
  );
};
