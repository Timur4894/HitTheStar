// bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: null, // Хранит информацию о книге
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload; // Устанавливает информацию о книге
    },
    clearBook: (state) => {
      state.book = null; // Очищает информацию о книге
    },
  },
});

// Экспортируем действия и редюсер
export const { setBook, clearBook } = bookSlice.actions;
export default bookSlice.reducer;
