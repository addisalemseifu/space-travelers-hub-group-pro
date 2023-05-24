import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rocket/getRockets', () => axios.get(dataUrl)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

const initialState = {
  rockets: [],
  isLoading: true,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => {
        console.log(action.payload)
        let index = null
         for (let i = 0;i<state.rockets.length;i++){
        if (state.rockets[i].id === action.payload) {
          index = i;
      }
    }
console.log(index)

for (let i = 0;i<state.rockets.length;i++){
  if (i === index) {
    state.rockets[i].reserved = true;
}
}
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
