import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/dragons';
const FETCH_DRAGONS = 'space-travelers-react-redux/dragons/getDragons';

export const getDragons = createAsyncThunk(FETCH_DRAGONS, async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  dragons: [],
};

const DragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        dragons: action.payload,
      }));
  },
});

export default DragonsSlice.reducer;
