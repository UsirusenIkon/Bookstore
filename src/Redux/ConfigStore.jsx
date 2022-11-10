import { configureStore } from '@reduxjs/toolkit';

import booksReducer from './Books/Book';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,
  },
});

export default store;