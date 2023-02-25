import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleActive } from '../redux/squaresSlice';

const Square = ({pos, isActive}) => {

  const dispatch = useDispatch()

  return (
    <Box
      onMouseEnter={() => dispatch(toggleActive(pos))}
      sx={{
        width: 40,
        height: 40,
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