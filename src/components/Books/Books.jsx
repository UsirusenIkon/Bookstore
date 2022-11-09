import { useSelector } from "react-redux";
import Book from "./Book/Book";
import './Books.css'
import Form from "./Form/Form";

const Books = () => {
  const books = useSelector((state) => state.books)
  console.log(books);

  return (
  <div className="books">
    {books.map(book => 
      <Book title={book.title}
      author={book.author} 
      key={book.id}
      id={book.id}      
      />
    )}
    <Form />
  </div>
  )
}

export default Books;