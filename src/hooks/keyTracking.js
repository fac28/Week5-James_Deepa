import { useEffect } from 'react';

export const useKeyTracking = (updateDirection) => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

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
  }, []);
};
