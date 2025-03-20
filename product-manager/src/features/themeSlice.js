// src/features/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'light', // По умолчанию светлая тема
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'), // Переключение темы
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;