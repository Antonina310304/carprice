import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';

import carReducer from '../store/carSlice';
import regionReducer from '../store/regionSlice';
import collectionCar from './collectionCarSlice';
import { loadState, saveState } from './localStorage';
import viewSlice from './viewSlice';

const persistedStore = loadState();
const store = configureStore({
  reducer: {
    region: regionReducer,
    carData: carReducer,
    collectionCar: collectionCar,
    view: viewSlice,
  },
  preloadedState: persistedStore,
});

store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
