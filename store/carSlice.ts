import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    vin: '',
    number: '',

    brand: '',
    year: '',
    model: '',
    mileage: '', //пробег
    color: '',
    transmission: '',
    wheel: '',
    volume: '',
    mail: '',
    agreement: true,

    carDetail: {},
  },

  reducers: {
    fetchCarDetail(state, action: PayloadAction<any>) {
      state.brand = action.payload.brand;
      state.year = action.payload.year;
      state.model = action.payload.model;
      state.volume = action.payload.volume;
      state.transmission = action.payload.transmission;
    },

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
export const { changeBrand, changeCarData, changeCarDetail, fetchCarDetail } = carSlice.actions;
