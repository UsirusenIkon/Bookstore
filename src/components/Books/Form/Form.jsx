import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import './Form.css'
import Buttons from "../../Buttons/Buttons";
import { addBook } from '../../../Redux/Books/Book';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  
  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch(
      addBook({
        item_id: Math.floor(Math.random() * 100),
        title,
        author,
        category: 'Action',
      }),
    );

    setTitle('');
    setAuthor('');
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const authorChangeHandler = (event) => {
    setAuthor(event.target.value);
  };

  return (
    <div className="form-container">
      <h3>ADD NEW BOOK</h3>
      <form
      onSubmit={addBookHandler}
      className="form flex"
      method="post">
        <div className="input flex">
          <input
            className="bt"
            type="text"
            onChange={titleChangeHandler}
            placeholder="Book Title"
            maxLength="30"
            id="book-title"
            value={title}
            required
          />
          <input
            name="email"
            className="wf"
            type="text"
            value={author}
            onChange={authorChangeHandler}
            placeholder="Author"
            maxLength="30"
            id="author"
            required
          />
        </div>
      <Buttons className="add-book" type="submit" name="Add Book"/>
      </form>
    </div>
  )
}

export default Form;