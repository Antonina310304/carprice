import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadingStatus } from '@constants/loadingStatus';

export const fetchBrand = createAsyncThunk(
  'collectionCar/fetchBrands',
  async (typeId: number, { rejectWithValue }: any) => {
    try {
      const response = await fetch(`https://api.carprice.ru/client/evaluate-form/brands?type_id=${typeId}`);
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchYears = createAsyncThunk(
  'collectionCar/fetchYears',
  async (brandId: number, { rejectWithValue }: any) => {
    try {
      const response = await fetch(`https://api.carprice.ru/client/evaluate-form/years?brand_id=${brandId}`);
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchModels = createAsyncThunk(
  'collectionCar/fetchModels',
  async ({ year, brandId }: { year: number; brandId: number }, { rejectWithValue }: any) => {
    try {
      const response = await fetch(
        `https://api.carprice.ru/client/evaluate-form/models?brand_id=${brandId}&year=${year}`
      );
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const collectionCarSlice = createSlice({
  name: 'collectionCar',
  initialState: {
    statusBrand: '',
    errorBrand: '',

    statusYears: '',
    errorYears: '',

    statusModel: '',
    errorModel: '',

    years: [],
    models: [],
    brands: [],

    statusCarDetail: '',
    errorCarDetail: '',
  },

  reducers: {
    changeStatusModel(state, action: PayloadAction<any>) {
      state.statusModel = action.payload;
    },
    fetchBrands(state, action: PayloadAction<any>) {
      state.brands = action.payload;
    },
    fetchYears(state, action: PayloadAction<any>) {
      state.years = action.payload;
    },
    fetchModels(state, action: PayloadAction<any>) {
      state.models = action.payload;
    },
  },

  extraReducers: {
    [fetchBrand.pending.type]: (state) => {
      state.statusBrand = loadingStatus.LOADING;
      state.errorBrand = '';
    },

    [fetchBrand.fulfilled.type]: (state, action) => {
      state.statusBrand = loadingStatus.RESOLVED;
      state.brands = action.payload;
    },

    [fetchYears.fulfilled.type]: (state, action) => {
      state.statusYears = loadingStatus.RESOLVED;
      state.years = action.payload;
    },

    [fetchYears.pending.type]: (state) => {
      state.statusYears = loadingStatus.LOADING;
      state.errorYears = '';
    },

    [fetchModels.pending.type]: (state) => {
      state.statusModel = loadingStatus.LOADING;
      state.errorModel = '';
    },

    [fetchModels.fulfilled.type]: (state, action) => {
      state.statusModel = loadingStatus.RESOLVED;
      state.models = action.payload;
    },
  },
});

export default collectionCarSlice.reducer;
export const { changeStatusModel } = collectionCarSlice.actions;
