import React from 'react';
import { Box } from '@mui/material';

const Square = ({pos, isActive}) => {
  return (
    <Box
      sx={{
        width: 100,
        height: 100,
        // backgroundColor: isActive ? 'primary.dark' : 'primary.main'
        backgroundColor: isActive ? '#378fbf' : '#ccc'
        // backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      {pos?.x} {pos?.y}
    </Box>
  );
};

export default Square;