import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    vin: '',
    number: '',

    brand: '',
    year: '',
    model: '',
    mail: '',
    agreement: true,

    carDetail: {},
  },

  reducers: {
    changeCarDetail(state, action: PayloadAction<any>) {
      state.carDetail = action.payload;
    },

    changeBrand(state, action: PayloadAction<string>) {
      state.brand = action.payload;
    },

    changeCarData(state, action: PayloadAction<{ key: string; value: string | boolean }>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[action.payload.key] = action.payload.value;
    },
  },

  extraReducers: {},
});

export default carSlice.reducer;
export const { changeBrand, changeCarData, changeCarDetail } = carSlice.actions;
