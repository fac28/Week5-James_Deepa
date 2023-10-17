/* eslint-disable react/prop-types */
import { useEffect } from 'react';

export function KeyTracking({ updateDirection }) {
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          updateDirection('left');
          break;
        case 'ArrowRight':
          updateDirection('right');
          break;
        case 'ArrowUp':
          updateDirection('up');
          break;
        case 'ArrowDown':
          updateDirection('down');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Press Arrow Keys</h1>
    </div>
  );
}
