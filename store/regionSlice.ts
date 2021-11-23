import { createSlice } from '@reduxjs/toolkit';

import regionList from '../static/region.json';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    regions: regionList.cities,
    activeRegion: regionList.cities.find((item: any) => item.selected),
  },

  reducers: {
    changeRegion(state: any, action: any) {
      // state.regions.forEach((region: any) => {
      //   if (region.name !== action.payload.name) {
      //     region.selected = false;
      //   } else {
      //     region.selected = true;
      //   }
      // });
      state.activeRegion = state.regions.find((item: any) => item.name === action.payload.name);
    },
  },
});
export const { changeRegion } = regionSlice.actions;
export default regionSlice.reducer;
