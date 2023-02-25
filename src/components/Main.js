import React, { useEffect } from 'react'
import { getPresets } from '../redux/squaresSlice'
import { useDispatch, useSelector } from 'react-redux'
import SelectBar from './SelectBar'
import SquaresField from './SquaresField'
import { Alert, CircularProgress } from '@mui/material'

const Main = () => {
  const dispatch = useDispatch()
  const schema = useSelector(state => state.squares.rows)
  const status = useSelector(state => state.squares.status)
  const errorText = useSelector(state => state.squares.error)

  useEffect(() => {
    dispatch(getPresets())
  }, [dispatch])

  return (
    <>
      {status === 'loading' ?
        <CircularProgress/>
        :
        <>
          {status === 'error' && <Alert severity="error" sx={{marginBottom: '30px'}}>{errorText}</Alert>}
          <SelectBar/>
          <SquaresField schema={schema}/>
        </>
      }
    </>
  );
};

export default Main