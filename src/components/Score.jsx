export const Score = ({ score, highScore }) => {
  return (
    <div>
      <h2>
        Score <span>{score}</span>
      </h2>
      <h2>
        High Score <span>{highScore}</span>
      </h2>
    </div>
  );
};
