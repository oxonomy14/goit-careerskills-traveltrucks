import axios from '../services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllCampers = createAsyncThunk(
  'campers/fetchAll',
  async ({ page = 1, limit = 4, filters = {} }, thunkAPI) => {
    try {
      // Фільтри, які бекенд підтримує
      const backendFilters = {};
      if (filters.location) backendFilters.location = filters.location;
      if (filters.form) backendFilters.form = filters.form;
      if (filters.transmission) backendFilters.transmission = filters.transmission;

      const boolFields = [
        'AC',
        'bathroom',
        'kitchen',
        'TV',
        'radio',
        'refrigerator',
        'microwave',
        'gas',
        'water',
      ];
      boolFields.forEach(field => {
        if (filters[field]) backendFilters[field] = true;
      });

      // axios автоматично формує query string
      const response = await axios.get('/campers', {
        params: { page, limit, ...backendFilters },
      });

      // 👇 тут беремо items і total з response.data
      const { items = [], total = 0 } = response.data;

      return {
        items,
        total,
        page,
        pages: Math.ceil(total / limit),
      };
    } catch (err) {
      if (err.response?.status === 404) {
        return { items: [], total: 0, page, pages: 0 };
      }
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchByIdCamper = createAsyncThunk(
  'camper/fetchById',
   async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);