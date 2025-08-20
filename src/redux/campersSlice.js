import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers } from './operations';

const initialState = {
  campers: {
    items: [],
    page: 1,
    pages: 1,
    total: null,
    loadingCampers: false,
    errorCampers: null,
    filter: 'all',
  },
};

const campersSlice = createSlice({
  name: 'campersList',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.campers.filter = action.payload;
      state.campers.page = 1;
      state.campers.items = []; // очищаем список, чтобы перезагрузить данные
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        const { items, total, page, pages } = action.payload;

        if (page === 1) {
          state.campers.items = items;
        } else {
          state.campers.items = [...state.campers.items, ...items];
        }

        state.campers.page = page;
        state.campers.pages = pages;
        state.campers.total = total;
        state.campers.loadingCampers = false;
      })

      .addCase(fetchAllCampers.pending, state => {
        state.campers.errorCampers = null;
        state.campers.loadingCampers = true;
      })

      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.campers.errorCampers = action.payload;
        state.campers.loadingCampers = false;
      });
  },
});

export const campersReducer = campersSlice.reducer;

export const { setFilter } = campersSlice.actions;
