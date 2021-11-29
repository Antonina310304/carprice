import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IRegion } from '@store/types';

import regionList from '../static/region.json';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    regions: regionList.cities,
    activeRegion: regionList.cities.find((item: IRegion) => item.name === 'Москва'),
  },

  reducers: {
    pushRegions(state, action: PayloadAction<IRegion[]>) {
      state.regions = action.payload;
    },

    changeRegion(state, action: PayloadAction<{ name: string }>) {
      state.activeRegion = state.regions.find((item: IRegion) => item.name === action.payload.name);
    },
  },
});
export const { changeRegion, pushRegions } = regionSlice.actions;
export default regionSlice.reducer;
