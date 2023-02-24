import React from 'react';
import Square from '../components/Square';
import { Grid } from '@mui/material';

const fieldSize = 5

const buildSquaresSchema = (size) => {
  const sizedEmptyArr = [...Array(size).keys()]
  const squaresSchema = sizedEmptyArr.map(
    (i) => ({id: i+1, data: {}})
  ).map(r => (
    {
      ...r,
      data: sizedEmptyArr.map(
        (i) => ({id: i+1, isActive: false})
      )
    }
  ))
  return squaresSchema
}

const squaresSchema = buildSquaresSchema(fieldSize)
console.log('squaresSchema', squaresSchema)
const SquaresField = () => {
  return (
    <Grid container direction={'column'}>
      {squaresSchema.map((row) => (
        <Grid item key={row.id}>
          <Grid container>
            {row.data.map(item =>
              <Grid item key={item.id}>
                <Square pos={{x: row.id, y: item.id}} isActive={item.isActive}/>
              </Grid>
            )}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default SquaresField;