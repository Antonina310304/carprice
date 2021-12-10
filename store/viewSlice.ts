import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlmostDoneStepTypes } from 'types/almostDoneStepTypes';

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    almostDoneStep: 'confirm',
  },

  reducers: {
    changeAlmostDoneStep(state, action: PayloadAction<AlmostDoneStepTypes>) {
      console.log(action.payload);
      state.almostDoneStep = action.payload;
    },
  },

  extraReducers: {},
});

export default viewSlice.reducer;
export const { changeAlmostDoneStep } = viewSlice.actions;
