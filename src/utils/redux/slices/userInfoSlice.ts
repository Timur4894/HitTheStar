import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Массив книг в корзине
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addInfo: (state, action) => {
      state.items.push(action.payload);
    },
    removeInfo: (state, action) => {
      state.items = [];
    },
  },
});

export const { addInfo, removeInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
