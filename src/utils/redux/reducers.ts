import { combineReducers } from '@reduxjs/toolkit';
import { createTransform, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stringify, parse } from 'flatted';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { historyReducer } from './slices/history';
import cartReducer from './slices/cartSlice'; // Импортируем редюсер для корзины
import userInfoReducer from './slices/userInfoSlice.ts'; // Импортируем редюсер для корзины
import notesReducer from './slices/notesSlice'; // Импортируем слайс заметок
import bookReducer from './slices/bookSlice.ts'; // Импортируем слайс заметок


const rootReducer = combineReducers({
  history: historyReducer,
  cart: cartReducer,
  userInfo: userInfoReducer,
  notes: notesReducer,
  book: bookReducer
});

export type reducersType = ReturnType<typeof rootReducer>;

export const transformCircular = createTransform(
  (inboundState, key) => stringify(inboundState),
  (outboundState, key) => parse(outboundState),
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  transforms: [transformCircular],
};

const persistedReducer = persistReducer<reducersType, any>(
  persistConfig,
  rootReducer,
);

export default persistedReducer;
