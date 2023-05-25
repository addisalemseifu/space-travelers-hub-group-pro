import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import missions from './missions/missionSlice';
import dragonsReducer from './dragons/dragonSlice';
import rocketReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    missions,
    dragons: dragonsReducer,
    rocket: rocketReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;
