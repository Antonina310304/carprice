import { useCallback, useState } from 'react';

import Box from '@mui/material/Box';

import { mainContainer } from '@styles/baseStyle';

const Test = function () {
  const [counter, setCounter] = useState(0);

  const handlerClick = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  return (
    <div className={mainContainer}>
      <Box>coounter {counter}</Box>
      <Box onClick={handlerClick} sx={{ m: 100 }}>
        asdfasfd
      </Box>
      <Box>
        <p> просто пустой текст</p>
      </Box>
    </div>
  );
};

export default Test;
