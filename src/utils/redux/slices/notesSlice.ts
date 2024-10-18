// src/utils/redux/slices/notesSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [], // Массив для хранения заметок
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload); // Добавляем новую заметку
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload.id); // Удаляем заметку по id
    },
    updateNote: (state, action) => {
      const index = state.notes.findIndex(note => note.id === action.payload.id);
      if (index !== -1) {
        state.notes[index] = action.payload; // Обновляем существующую заметку
      }
    },
  },
});

export const { addNote, removeNote, updateNote } = notesSlice.actions;
export default notesSlice.reducer;
