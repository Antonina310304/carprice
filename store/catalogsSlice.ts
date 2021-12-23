import {
  createAction, createAsyncThunk, createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { loadingStatus } from '@constants/loadingStatus';

import arrayToObj from '@utils/ArrayToObj';

export const fetchCities = createAsyncThunk('collectionCar/fetchCities', async (id, { rejectWithValue }: any) => {
  try {
    const response = await fetch(
      'https://api.carprice.ru/client/api/v1.0.0/cities?api_token=bl1xzytbbohfgrcvtcfurx2fl11xspe4',
    );
    if (!response.ok) {
      throw new Error('Can delete task. Server error');
    }
    const data = await response.json();
    return data.cities;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchModifications = createAsyncThunk(
  'collectionCar/fetchModifications',
  async (
    { brandId, modelId, yearId }: { brandId: string; modelId: string; yearId: number },
    { rejectWithValue }: any,
  ) => {
    try {
      const response = await fetch(
        `https://api.carprice.ru/client/evaluate-form/modifications?brand_id=${brandId}&model_id=${modelId}&year=${yearId}`,
      );
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCarBody = createAsyncThunk(
  'collectionCar/fetchCarBody',
  async ({ modelId, yearId }: { modelId: string; yearId: number }, { rejectWithValue }: any) => {
    try {
      const response = await fetch(
        `https://api.carprice.ru/client/evaluate-form/body-types?model_id=${modelId}&year=${yearId}`,
      );
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

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
  },
);

export const fetchYears = createAsyncThunk(
  'collectionCar/fetchYears',
  async (brandId: string, { rejectWithValue }: any) => {
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
  },
);

export const fetchModels = createAsyncThunk(
  'collectionCar/fetchModels',
  async ({ yearId, brandId }: { yearId: number; brandId: string }, { rejectWithValue }: any) => {
    try {
      const response = await fetch(
        `https://api.carprice.ru/client/evaluate-form/models?brand_id=${brandId}&year=${yearId}`,
      );
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchOffices = createAsyncThunk('collectionCar/fetchOffices', async (id, { rejectWithValue }: any) => {
  try {
    const response = await fetch(
      'https://api.carprice.ru/client/api/v1.0.0/branches?api_token=bl1xzytbbohfgrcvtcfurx2fl11xspe4&remote_inspection_paid=0',
    );
    if (!response.ok) {
      throw new Error('Can delete task. Server error');
    }
    const data = await response.json();
    return data.branches;
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

export const fetchDates = createAsyncThunk(
  'collectionCar/fetchDates',
  async (branchId: string, { rejectWithValue }: any) => {
    try {
      const response = await fetch(
        `https://api.carprice.ru/client/api/v1.0.0/branch/dates?api_token=bl1xzytbbohfgrcvtcfurx2fl11xspe4&branch_id=${branchId}`,
      );
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();
      return data.dates;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTimes = createAsyncThunk(
  'collectionCar/fetchTimes',
  async ({ branchId, date }: { branchId: string; date: string }, { rejectWithValue }: any) => {
    try {
      const response = await fetch(
        `https://api.carprice.ru/client/api/v1.0.0/branch/times?api_token=bl1xzytbbohfgrcvtcfurx2fl11xspe4&branch_id=${branchId}&date=${date}`,
      );
      if (!response.ok) {
        throw new Error('Can delete task. Server error');
      }
      const data = await response.json();

      return data.times;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const catalogsSlice = createSlice({
  name: 'catalogs',
  initialState: {
    statusBrand: '',
    errorBrand: '',

    statusYears: '',
    errorYears: '',

    statusModel: '',
    errorModel: '',

    statusModifications: '',
    errorModifications: '',

    statusCarBodyList: '',
    errorCarBodyList: '',

    statusCities: '',
    errorCities: '',

    statusOfficeListMeeting: '',
    errorOfficeListMeeting: '',

    statusDateListMeeting: '',
    errorDateListMeeting: '',

    statusTimeListMeeting: '',
    errorTimeListMeeting: '',

    officeListMeeting: [],
    dateListMeeting: [],
    timeListMeeting: [],

    brands: [],
    years: [],
    models: [],
    modifications: [],
    carBodyList: [],
    cities: [],
  },

  reducers: {
    fetchData(state, action: PayloadAction<any>) {
      state.brands = action.payload.brands;
      state.years = action.payload.years;
      state.models = action.payload.models;
      state.modifications = action.payload.modifications;
      state.carBodyList = action.payload.carBodyList;

      state.statusYears = loadingStatus.RESOLVED;
      state.statusBrand = loadingStatus.RESOLVED;
      state.statusModel = loadingStatus.RESOLVED;
      state.statusModifications = loadingStatus.RESOLVED;
      state.statusCarBodyList = loadingStatus.RESOLVED;
    },

    changeStatusModel(state, action: PayloadAction<string>) {
      state.statusModel = action.payload;
    },

    changeStatusModifications(state, action: PayloadAction<string>) {
      state.statusModifications = action.payload;
    },

    changeStatusBodyList(state, action: PayloadAction<string>) {
      state.statusCarBodyList = action.payload;
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

    [fetchCarBody.pending.type]: (state) => {
      state.statusCarBodyList = loadingStatus.LOADING;
      state.errorCarBodyList = '';
    },

    [fetchCarBody.fulfilled.type]: (state, action) => {
      state.statusCarBodyList = loadingStatus.RESOLVED;
      state.carBodyList = action.payload;
    },

    [fetchModifications.pending.type]: (state) => {
      state.statusModifications = loadingStatus.LOADING;
      state.errorModifications = '';
    },

    [fetchModifications.fulfilled.type]: (state, action) => {
      state.statusModifications = loadingStatus.RESOLVED;
      state.modifications = arrayToObj(action.payload);
    },

    [fetchCities.pending.type]: (state) => {
      state.statusCities = loadingStatus.LOADING;
      state.errorCities = '';
    },

    [fetchCities.fulfilled.type]: (state, action) => {
      state.statusCities = loadingStatus.RESOLVED;
      state.cities = action.payload;
    },

    [fetchOffices.pending.type]: (state) => {
      state.statusOfficeListMeeting = loadingStatus.LOADING;
      state.errorOfficeListMeeting = '';
    },

    [fetchOffices.fulfilled.type]: (state, action) => {
      state.statusOfficeListMeeting = loadingStatus.RESOLVED;
      state.officeListMeeting = action.payload;
    },

    [fetchDates.pending.type]: (state) => {
      state.statusDateListMeeting = loadingStatus.LOADING;
      state.errorDateListMeeting = '';
    },

    [fetchDates.fulfilled.type]: (state, action) => {
      state.statusDateListMeeting = loadingStatus.RESOLVED;
      state.dateListMeeting = action.payload;
    },

    [fetchTimes.pending.type]: (state) => {
      state.statusTimeListMeeting = loadingStatus.LOADING;
      state.errorTimeListMeeting = '';
    },

    [fetchTimes.fulfilled.type]: (state, action) => {
      state.statusTimeListMeeting = loadingStatus.RESOLVED;
      state.timeListMeeting = action.payload;
    },
  },
});

export default catalogsSlice.reducer;
export const {
  changeStatusModel, fetchData, changeStatusBodyList, changeStatusModifications,
} = catalogsSlice.actions;
