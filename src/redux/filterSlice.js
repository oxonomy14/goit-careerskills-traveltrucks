import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
     location: '',   
    form: '',
    transmission: '',      
    AC: false,      
    kitchen: false, 
    TV: false,      
    bathroom: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water:false,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      // оновлюємо тільки ті поля, які прийшли
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilter(state) {
      state.filters = { ...initialState.filters }; // робимо копію
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
