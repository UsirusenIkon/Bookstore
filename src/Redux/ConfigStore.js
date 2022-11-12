import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import booksReducer from './Books/Book';
import categoriesReducer from './Categories/Categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
}, applyMiddleware(thunk));

export default store;
