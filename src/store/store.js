import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export default store;
