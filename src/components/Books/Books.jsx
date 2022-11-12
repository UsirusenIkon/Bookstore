import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Book from "./Book/Book";
import './Books.css'
import Form from "./Form/Form";
import { getBooks } from "../../Redux/Books/Book";

const Books = () => {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [books, dispatch]);

  return (
    <div className="books">
      {books.map(book => 
        <Book title={book.title}
        author={book.author} 
        key={book.item_id}
        id={book.item_id}      
        />
      )}
      <Form />
    </div>
  )
}

export default Books;