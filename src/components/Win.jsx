import Confetti from 'react-confetti';
import { initialGameBoardState } from '../helpers/constants';
export const Win = ({ restartGame, winScore, updateWinScore, score, highScore }) => {
  if (!winScore) return;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  return (
    <>
      <Confetti width={windowWidth} height={windowHeight} />
      <div className='overlay'>
        <div className='modal'>
          <h1> *** You Win!!! ***</h1>
          <button
            className='button'
            onClick={() => {
              updateWinScore(winScore);
              restartGame(initialGameBoardState, score, highScore);
            }}
          >
            {' '}
            New Game
          </button>
        </div>
      </div>
    </>
  );
};
