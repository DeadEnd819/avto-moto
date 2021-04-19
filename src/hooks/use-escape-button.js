import {useEffect, useCallback} from 'react';

export const useEscapeButton = (callback) => {
  const handleEscapeDown = useCallback((evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener(`keydown`, handleEscapeDown);

    return () => document.removeEventListener(`keydown`, handleEscapeDown);
  }, [handleEscapeDown]);
};
