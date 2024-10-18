import {createSlice} from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: {
    array: [],
  },
  reducers: {
    add: (state, {payload}: {payload: string}) => {
      state.array.push(payload);
    },
  },
});

export const {actions: historyActions, reducer: historyReducer} = historySlice;
