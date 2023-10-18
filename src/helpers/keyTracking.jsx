import { useEffect } from 'react';

export const keyTracking = (updateDirection) => {
  // maybe needs to be turned in to a custom hook?
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
  }, []);
};
