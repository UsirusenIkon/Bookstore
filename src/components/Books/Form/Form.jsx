import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import './Form.css'
import Buttons from "../../Buttons/Buttons";

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((state) => state.books)
  const dispatch = useDispatch();
  
  const addBookHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: 'bookstore/books/ADD_BOOK',
      payload: {
        id: books.length + 1,
        title,
        author,
      },
    });

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
      <h2>ADD NEW BOOK</h2>
      <form
      onSubmit={addBookHandler}
      className="form flex"
      method="post">
        <div className="input flex">
          <label htmlFor="book-title">
            <input
              name="fullname"
              className="wf"
              type="text"
              onChange={titleChangeHandler}
              placeholder="Book Title"
              maxLength="30"
              id="book-title"
              value={title}
              required
            />
          </label>
          <label htmlFor="author">
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
          </label>
        </div>
      <Buttons className="reg-btn" type="submit" name="Add Book"/>
      </form>
    </div>
  )
}

export default Form;