import React, { useEffect } from 'react';
import { getPresets, makeSquaresSchema } from '../redux/squaresSlice';
import { useDispatch, useSelector } from 'react-redux';
import SelectBar from '../components/SelectBar';
import SquaresField from './SquaresField';

const Main = () => {
  const dispatch = useDispatch()
  const schema = useSelector(state => state.squares.rows)
  const status = useSelector(state => state.squares.status)

  useEffect(() => {
    dispatch(getPresets())
  }, [dispatch])

  return (
    <>
      <p>Status: {status}</p>
      <SelectBar/>
      <SquaresField schema={schema}/>
    </>
  );
};

export default Main;