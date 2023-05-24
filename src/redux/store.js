import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missions from './missions/missionSlice';
import dragonsReducer from './dragons/dragonSlice';

const store = configureStore({
  reducer: {
    missions,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});

export default store;
