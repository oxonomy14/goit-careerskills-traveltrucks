import axios from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      // Видаляємо false / пусті значення з фільтрів
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value)
      );

      // Формуємо query string
      const params = new URLSearchParams({
        limit,
        page,
        ...cleanFilters,
      }).toString();

      const url = `/campers?${params}`;
      const response = await axios.get(url);

      // API повертає { total, items }
      const { total, items } = response.data;

      return {
        items,
        total,
        page,
        pages: Math.ceil(total / limit),
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

