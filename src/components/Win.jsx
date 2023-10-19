import Confetti from 'react-confetti';
export const Win = ({ restartGame, winScore, setWinScore, score, highScore }) => {
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
              setWinScore(!winScore);
              restartGame( score, highScore);
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
