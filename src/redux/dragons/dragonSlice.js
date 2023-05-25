import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/dragons';
const FETCH_DRAGONS = 'space-travelers-react-redux/dragons/getDragons';

export const getDragons = createAsyncThunk(FETCH_DRAGONS, async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  const newDragons = [];
  data.map((dragon) => newDragons.push({
    id: dragon.id,
    name: dragon.name,
    description: dragon.description,
    image: dragon.flickr_images[0],
    reserved: false,
  }));
  return newDragons;
});

const initialState = {
  dragons: [],
  isLoading: false,
};

const DragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    makeReservation: (state, action) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: true };
      });
      return {
        ...state,
        dragons: newState,
      };
    },
    cancelReservation: (state, action) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== action.payload) return dragon;
        return { ...dragon, reserved: false };
      });
      return {
        ...state,
        dragons: newState,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDragons.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        dragons: action.payload,
      }));
  },
});

export const { cancelReservation, makeReservation } = DragonsSlice.actions;
export default DragonsSlice.reducer;
