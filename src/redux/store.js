import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missions from './missions/missionSlice';

const store = configureStore({
  reducer: {
    missions,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
