import { configureStore } from '@reduxjs/toolkit';
import missions from './missions/missionSlice';
import dragonsReducer from './dragons/dragonSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions,
    dragons: dragonsReducer,
    rocket: rocketReducer,
  },

});

export default store;
