import { configureStore } from '@reduxjs/toolkit';
import throttle from 'lodash.throttle';

import carReducer from '../store/carSlice';
import regionReducer from '../store/regionSlice';
import catalogsReducer from './catalogsSlice';
import { loadState, saveState } from './localStorage';
import userDataReducer from './userDataSlice';
import viewSlice from './viewSlice';

const persistedStore = loadState();
const store = configureStore({
  reducer: {
    region: regionReducer,
    carData: carReducer,
    catalogs: catalogsReducer,
    view: viewSlice,
    userData: userDataReducer,
  },
  preloadedState: persistedStore,
});

store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
