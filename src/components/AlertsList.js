import React from 'react'
import { Alert, Stack } from '@mui/material'
import { useSelector } from 'react-redux'

const AlertsList = () => {
  const squares = useSelector(state => state.squares.rows)
  return (
    <Stack spacing={2}>
      {squares && squares.map(
        row => row.data.map(item => (
          <React.Fragment key={'row-'+row.id+'item-'+item.id}>
            {item.isActive ?
              <Alert icon={false} severity="warning">row {row.id} col {item.id}</Alert>
              : null
            }
          </React.Fragment>
        ))
      )}
    </Stack>
  )
}

export default AlertsList