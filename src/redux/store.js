import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    rocket: rocketReducer,
  },
});

export default store;
