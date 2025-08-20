import axios from '../services/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filter = '' }, thunkAPI) => {
    try {
      const query = `limit=${limit}&page=${page}${filter ? `&${filter}` : ''}`;
      const url = `/campers?${query}`;

      const response = await axios.get(url);

      // API возвращает { total, items }
      const { total, items } = response.data;

      return {
        items,
        total,
        page,
        pages: Math.ceil(total / limit), // вычисляем количество страниц
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
