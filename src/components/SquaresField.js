import React from 'react'
import Square from './Square'
import { Grid } from '@mui/material'

const SquaresField = ({ schema }) => {
  const getSquareSize = () => schema.length > 20 ? 30 : 50
  return (
    <Grid container direction={'column'} my={5}>
      {schema.map((row) => (
        <Grid item key={row.id}>
          <Grid container>
            {row.data.map(item =>
              <Grid item key={item.id}>
                <Square
                  pos={{x: row.id, y: item.id}}
                  isActive={item.isActive}
                  size={() => getSquareSize()}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default SquaresField