import React, { useState } from 'react';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeSquaresSchema, setSelectedPreset } from '../redux/squaresSlice';

const SelectBar = () => {
  const dispatch = useDispatch()
  const fetchedModes = useSelector(state => state.squares.presets)
  console.log('fetchedModes', fetchedModes)

  const [mode, setMode] = useState('')
  const handleChange = (e) => setMode(e.target.value)
  // const handleClick = () => dispatch(setSelectedPreset(mode))
  const handleClick = () => dispatch(makeSquaresSchema(mode))

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth size="small">
            <InputLabel id="mode-picker">Pick mode</InputLabel>
            <Select
              labelId="mode-picker"
              value={mode}
              label="Pick mode"
              onChange={handleChange}
            >
              {fetchedModes && fetchedModes.map(item => (
                <MenuItem key={item?.field} value={item?.field}>{item?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClick}
            disabled={!mode}
          >Start</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SelectBar;