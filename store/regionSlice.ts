import { createSlice } from '@reduxjs/toolkit';

import regionList from '../static/region.json';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    regions: regionList.cities,
    activeRegion: regionList.cities.find((item: any) => item.name === 'Москва'),
  },

  reducers: {
    pushRegions(state, action: any) {
      state.regions = action.payload;
    },

    changeRegion(state: any, action: any) {
      state.activeRegion = state.regions.find((item: any) => item.name === action.payload.name);
    },
  },
});
export const { changeRegion, pushRegions } = regionSlice.actions;
export default regionSlice.reducer;
