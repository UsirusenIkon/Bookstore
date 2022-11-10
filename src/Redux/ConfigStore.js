import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/Book';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  reducer: {
    category: categoriesReducer,
    books: booksReducer
  }
});

export default store;