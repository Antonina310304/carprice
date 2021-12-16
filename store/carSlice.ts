import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { transformDataForStorage } from '@store/utils';

import FieldsNames from '@constants/fields';
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
    [FieldsNames.REG_NUMBER]: '',
    agreement: true,
    mileage: '', //пробег
    [FieldsNames.VIN]: '',
    [FieldsNames.MODIFICATION]: '', //
    [FieldsNames.BODY]: '', //кузов
    [FieldsNames.MAIL]: '',
    carDetail: {
      //получаю с сервера
      [FieldsNames.BRAND]: '',
      [FieldsNames.YEAR]: 0,
      [FieldsNames.MODEL]: '',
      [FieldsNames.COLOR]: '',
      [FieldsNames.TRANSMISSION]: '',
      [FieldsNames.ENGINE_TYPE]: '',
      [FieldsNames.ENGINE_VOLUME]: 0,
      [FieldsNames.ENGINE_POWER]: 0,
      [FieldsNames.WHEEL]: '', // тип руля
    },
    statusRequest: '',
    errorRequest: '',
    statusDetect: '',
    errorDetect: '',
    [FieldsNames.CREDIT]: '',
    [FieldsNames.WHEEL]: '', // тип руля
  },

  reducers: {
    fetchCarDetail(state, action: PayloadAction<{ brandId: string; yearId: string; modelId: string }>) {
      state.carDetail[FieldsNames.BRAND] = action.payload.brandId;
      state.carDetail[FieldsNames.YEAR] = action.payload.yearId;
      state.carDetail[FieldsNames.MODEL] = action.payload.modelId;
    },

    changeModification(state, action: PayloadAction<string>) {
      state.modification = action.payload;
    },

    changeData(state, action: PayloadAction<{ key: string; value: string | boolean }>) {
      state[action.payload.key] = action.payload.value;
    },

    changeCarBody(state, action: PayloadAction<string>) {
      state.body = action.payload;
    },

    changeVin(state, action: PayloadAction<string>) {
      state[FieldsNames.VIN] = action.payload;
      state.statusDetect = '';
      state.statusRequest = '';
      state.errorDetect = '';
    },

    /*при измении бренда всегда сбрасываются остальные данные (созависимые поля) */
    changeBrand(state, action: PayloadAction<string>) {
      state.carDetail[FieldsNames.BRAND] = action.payload;
      state.carDetail[FieldsNames.YEAR] = 0;
      state.carDetail[FieldsNames.MODEL] = '';
      state[FieldsNames.MODIFICATION] = '';
      state[FieldsNames.BODY] = '';
    },

    /*при измении года всегда сбрасываются остальные данные (созависимые поля) */
    changeYear(state, action: PayloadAction<number>) {
      state.carDetail[FieldsNames.YEAR] = action.payload;
      state.carDetail[FieldsNames.MODEL] = '';
      state[FieldsNames.MODIFICATION] = '';
      state[FieldsNames.BODY] = '';
    },

    /*при измении модели всегда сбрасываются остальные данные (созависимые поля) */
    changeModel(state, action: PayloadAction<string>) {
      state.carDetail[FieldsNames.MODEL] = action.payload;
      state[FieldsNames.MODIFICATION] = '';
      state[FieldsNames.BODY] = '';
    },

    changeCarData(state, action: PayloadAction<{ key: string; value: string | boolean }>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.carDetail[action.payload.key] = action.payload.value;
    },
  },

  extraReducers: {
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
      state.statusRequest = loadingStatus.RESOLVED;
      state.carDetail = transformDataForStorage(action.payload.data[0]);
      state.statusDetect = action.payload.success;
      state.errorDetect = action.payload.error.message;
      state[FieldsNames.MODIFICATION] = '';
      state[FieldsNames.BODY] = '';
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
