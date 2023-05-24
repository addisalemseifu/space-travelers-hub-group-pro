import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import missions from './missions/missionsReducer';

const store = configureStore({
  reducer: {
    missions,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
