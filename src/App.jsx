// import { useState } from 'react';
import './App.css';
const gameBoard = [["","","",""],["","","",""],["","","",""],["","","",""]]

function App() {
  return (
    <>
      <h1>2048</h1>
      <div className='grid-container'>
        {gameBoard.map((rows,rowIndex) => {
          return (<div className='grid-row' key={rowIndex}>
            {rows.map((tileValue,colIndex) => {
              return (<div className='grid-tile' key={colIndex}>{tileValue}</div>)
            })}
          </div>)
        })}
      </div>
    </>
  );
}

export default App;
