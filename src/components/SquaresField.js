import React from 'react'
import Square from './Square'
import { Box } from '@mui/material'

const SquaresField = ({ schema }) => (
  <Box
    sx={{
      display: 'grid',
      maxWidth: `${schema.length * 50}px` // set max single square size
    }}
   my={5}
  >
    {schema.map((row) => (
      <Box
        key={row.id}
        sx={{
          display: 'grid', // use grid to do equal columns width
          gridAutoFlow: 'column'
        }}
      >
        {row.data.map(item =>
          <Square
            key={item.id}
            pos={{x: row.id, y: item.id}}
            isActive={item.isActive}
          />
        )}
      </Box>
    ))}
  </Box>
)

export default SquaresField