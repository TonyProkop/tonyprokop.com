import { useEffect, useState } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(document.documentElement.clientWidth);
  }, []);

  return {
    windowWidth,
    updateWindowWidth: () => setWindowWidth(document.documentElement.clientWidth)
  };
}

export default useWindowWidth;
