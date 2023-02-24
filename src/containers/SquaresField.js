import React from 'react'
import Square from '../components/Square'
import { Grid } from '@mui/material'

const SquaresField = ({ schema }) => (
  <Grid container direction={'column'} my={5}>
    {schema.map((row) => (
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
)

export default SquaresField