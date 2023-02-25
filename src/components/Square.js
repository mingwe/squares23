import React from 'react'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toggleActive } from '../redux/squaresSlice'

const Square = ({pos, isActive, size = 40, ...other}) => {

  const dispatch = useDispatch()

  return (
    <Box
      onMouseEnter={() => dispatch(toggleActive(pos))}
      sx={{
        width: size,
        height: size,
        backgroundColor: isActive ? '#378fbf' : '#ddd',
        outline: '1px solid #000'
      }}
      {...other}
    />
  );
};

export default Square