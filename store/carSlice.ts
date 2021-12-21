import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchModifications } from '@store/catalogsSlice';

import fields, { carDetailFields } from '@constants/fields';
import { loadingStatus } from '@constants/loadingStatus';

export const detectCar = createAsyncThunk(
  'car/detect',
  async ({ key, value }: { key: string; value: string }, { rejectWithValue }: any) => {
    try {
      const response = await fetch(`http://localhost:4200/detect?${key}=${value}`);
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
        const data = await response.json();
        console.log(data);
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const carSlice = createSlice({
  name: 'car',
  initialState: {
    statusRequest: '',
    errorRequest: '',
    statusDetect: '',
    errorDetect: '',
    agreement: true,

    [fields.REG_NUMBER]: '',
    [fields.VIN]: '',

    carDetail: {
      [carDetailFields.BRAND]: '',
      [carDetailFields.YEAR]: null,
      [carDetailFields.MODEL]: '',
      [carDetailFields.BODY]: '', //кузов
      [carDetailFields.MODIFICATION]: '', //
    },
  },

  reducers: {
    fetchCarDetail(state, action: PayloadAction<{ brandId: string; yearId: number; modelId: string }>) {
      state.carDetail[carDetailFields.BRAND] = action.payload.brandId;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.carDetail[carDetailFields.YEAR] = action.payload.yearId;
      state.carDetail[carDetailFields.MODEL] = action.payload.modelId;
    },

    changeModification(state, action: PayloadAction<string>) {
      state.carDetail[carDetailFields.MODIFICATION] = action.payload;
    },

    changeData(state, action: PayloadAction<{ key: string; value: string | boolean }>) {
      state[action.payload.key] = action.payload.value;
    },

    changeCarBody(state, action: PayloadAction<string>) {
      state.carDetail[carDetailFields.BODY] = action.payload;
    },

    changeVin(state, action: PayloadAction<string>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[fields.VIN] = action.payload;
      state.statusDetect = '';
      state.statusRequest = '';
      state.errorDetect = '';
    },

    /*при измении бренда всегда сбрасываются остальные данные (созависимые поля) */
    changeBrand(state, action: PayloadAction<string>) {
      state.carDetail[carDetailFields.BRAND] = action.payload;
      state.carDetail[carDetailFields.YEAR] = null;
      state.carDetail[carDetailFields.MODEL] = '';
      state.carDetail[carDetailFields.MODIFICATION] = '';
      state.carDetail[carDetailFields.BODY] = '';
    },

    /*при измении года всегда сбрасываются остальные данные (созависимые поля) */
    changeYear(state, action: PayloadAction<number>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.carDetail[carDetailFields.YEAR] = action.payload;
      state.carDetail[carDetailFields.MODEL] = '';
      state.carDetail[carDetailFields.MODIFICATION] = '';
      state.carDetail[carDetailFields.BODY] = '';
    },

    /*при измении модели всегда сбрасываются остальные данные (созависимые поля) */
    changeModel(state, action: PayloadAction<string>) {
      state.carDetail[carDetailFields.MODEL] = action.payload;
      state.carDetail[carDetailFields.MODEL_NAME] = action.payload;
      state.carDetail[carDetailFields.MODIFICATION] = '';
      state.carDetail[carDetailFields.BODY] = '';
    },

    changeCarData(state, action: PayloadAction<{ key: string; value: string | boolean }>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.carDetail[action.payload.key] = action.payload.value;
    },
  },

  extraReducers: {
    [fetchModifications.fulfilled.type]: (state, action) => {
      console.log(action.payload);
    },

    [detectCar.rejected.type]: (state, action) => {
      state.statusRequest = loadingStatus.REJECTED;
      state.errorRequest = action.payload;
    },

    [detectCar.pending.type]: (state) => {
      state.statusRequest = loadingStatus.LOADING;
      state.errorRequest = '';
    },

    // при распозрании автомобиля сбрасываю тип кузова и модификацию
    [detectCar.fulfilled.type]: (state, action) => {
      const data = action.payload.data[0];
      state.statusRequest = loadingStatus.RESOLVED;

      state.carDetail[carDetailFields.BRAND] = data?.brand;
      state.carDetail[carDetailFields.YEAR] = data?.year;
      state.carDetail[carDetailFields.MODEL] = data?.model;
      state.statusDetect = action.payload.success;
      state.errorDetect = action.payload.error.message;
      state.carDetail[carDetailFields.MODIFICATION] = '';
      state.carDetail[carDetailFields.BODY] = '';
    },
  },
});

export default carSlice.reducer;
export const {
  changeBrand,
  changeCarData,
  fetchCarDetail,
  changeVin,
  changeYear,
  changeModel,
  changeCarBody,
  changeModification,
  changeData,
} = carSlice.actions;
