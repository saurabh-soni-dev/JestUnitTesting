import {useState, useEffect} from 'react';

const useCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prev => prev + 1);
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    count,
  };
};
export default useCount;
