import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Массив книг в корзине
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addBookToCart: (state, action) => {
      // Проверяем, если книга уже в корзине
      const exists = state.items.some(item => item.title === action.payload.title);
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeBookFromCart: (state, action) => {
      // Удаляем книгу из корзины по названию
      state.items = state.items.filter(item => item.title !== action.payload.title);
    },
    clearCart: (state) => {
      // Очищаем корзину
      state.items = [];
    },
  },
});

export const { addBookToCart, removeBookFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
