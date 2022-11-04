import Book from "./Book/Book";
import './Books.css'
import Form from "./Form/Form";

const Books = (props) => {
  return (
  <div className="books">
    <Book />
    <Form />
  </div>
  )
} 

export default Books;