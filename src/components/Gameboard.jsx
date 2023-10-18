/* eslint-disable react/prop-types */
export function Gameboard({ gameBoard }) {
  return (
    <div className='grid-container'>
      {gameBoard.map((rows, rowIndex) => {
        return (
          <div className='grid-row' key={rowIndex}>
            {rows.map((tileValue, colIndex) => {
              return (
                <div className={`grid-tile tile-${tileValue}`} key={colIndex}>
                  {tileValue}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
