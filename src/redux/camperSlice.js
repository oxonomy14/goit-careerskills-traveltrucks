import { createSlice } from '@reduxjs/toolkit';
import { fetchByIdCamper } from './operations';

const camperSlice = createSlice({
  name: 'camper',
  initialState: {
    item: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchByIdCamper.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchByIdCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchByIdCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const camperReducer = camperSlice.reducer;
