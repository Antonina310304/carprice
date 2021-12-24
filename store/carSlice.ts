import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchModifications } from '@store/catalogsSlice';

import fields, { carDetailFields } from '@constants/fields';
import { loadingStatus } from '@constants/loadingStatus';
import axios from 'axios';
import getStaticProps from '@utils/getStaticProps';

const papiHost = getStaticProps().papiHost || '';

// эту функцию потом переделать на post при интеграции
export const detectCar = createAsyncThunk(
  'car/detect',
  async (params: { key: string; value: string }, { rejectWithValue }: any) => {
    const response = await axios.get(`${papiHost}createOffer`);
    return response.data;
  },
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
    [fields.ID_OFFER]: '',

    carDetail: {
      [carDetailFields.BRAND]: '',
      [carDetailFields.YEAR]: null,
      [carDetailFields.MODEL]: '',
      [carDetailFields.BODY]: '', // кузов
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

    changeRegNumber(state, action: PayloadAction<string>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state[fields.REG_NUMBER] = action.payload;
      state.statusDetect = '';
      state.statusRequest = '';
      state.errorDetect = '';
    },

    /* при измении бренда всегда сбрасываются остальные данные (созависимые поля) */
    changeBrand(state, action: PayloadAction<string>) {
      state.carDetail[carDetailFields.BRAND] = action.payload;
      state.carDetail[carDetailFields.YEAR] = null;
      state.carDetail[carDetailFields.MODEL] = '';
      state.carDetail[carDetailFields.MODIFICATION] = '';
      state.carDetail[carDetailFields.BODY] = '';
    },

    /* при измении года всегда сбрасываются остальные данные (созависимые поля) */
    changeYear(state, action: PayloadAction<number>) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.carDetail[carDetailFields.YEAR] = action.payload;
      state.carDetail[carDetailFields.MODEL] = '';
      state.carDetail[carDetailFields.MODIFICATION] = '';
      state.carDetail[carDetailFields.BODY] = '';
    },

    /* при измении модели всегда сбрасываются остальные данные (созависимые поля) */
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
      console.log(action.payload);
      state.carDetail[carDetailFields.BRAND] = action.payload.car.brand_id;
      state.carDetail[carDetailFields.YEAR] = action.payload.car.year;
      state.carDetail[carDetailFields.MODEL] = action.payload.car.model_id;
      state.carDetail[carDetailFields.MODIFICATION] = action.payload.car.modification_id;
      state[fields.ID_OFFER] = action.payload.offer_uuid;

      state.statusRequest = loadingStatus.RESOLVED;
      state.statusDetect = 'true'; // потом надо будет переделать
      state.errorDetect = '';
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
  changeRegNumber,
  changeData,
} = carSlice.actions;
