import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'bookstore/books/ADD_BOOK/fulfilled':
      return [...state, action.payload];

    case 'bookstore/books/GET_BOOKS/fulfilled':
      return action.payload;

    case 'bookstore/books/REMOVE_BOOK/fulfilled':

      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(`${api}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return book;
});

const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(`${api}/books`);
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  console.log(id);
  await fetch(`${api}/books/${id}`, { method: 'DELETE' });
  return id;
});

export default booksReducer;
export { addBook, removeBook, getBooks };
