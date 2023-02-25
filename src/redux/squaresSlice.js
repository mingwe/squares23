import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { buildSquaresSchema } from '../helpers'
import { fetchPresets } from './squaresAPI'

const initialState = {
  status: 'idle',
  presets: [],
  rows: [],
  selectedPreset: null
};

export const getPresets = createAsyncThunk(
  'squares/fetchPresets',
  async () => {
    const response = await fetchPresets();
    return response.data;
  }
);

export const squaresSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {
    setSelectedPreset: (state, action) => {
      console.log(action)
      state.selectedPreset = action.payload
    },
    makeSquaresSchema: (state, action) => {
      state.rows = buildSquaresSchema(action.payload)
    },
    toggleActive: (state, action) => {
      const x = action.payload.x -1
      const y = action.payload.y -1
      state.rows[x].data[y].isActive = !state.rows[x].data[y].isActive
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPresets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getPresets.fulfilled, (state, action) => {
        state.status = 'idle';
        state.presets = action.payload;
      });
  },
});

export const { toggleActive, makeSquaresSchema, setSelectedPreset } = squaresSlice.actions
export default squaresSlice.reducer
