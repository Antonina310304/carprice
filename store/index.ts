import { configureStore } from '@reduxjs/toolkit';
import regionReducer from '../store/regionSlice';

export default configureStore({
  reducer: {
    region: regionReducer,
  },
});
