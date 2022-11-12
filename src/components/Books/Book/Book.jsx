import { useDispatch } from "react-redux";
import Buttons from "../../Buttons/Buttons";
import { removeBook } from "../../../Redux/Books/Book";
import './Book.css'

const Book = ({ title, author, id }) => {

  const dispatch = useDispatch()

  const removeHandler = () => {
    dispatch ( removeBook(id))
    console.log(id)
  }

  return (
    <div className="bookcover flex">
      <div>
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <div className="btn-grp flex">
          <Buttons className="book-btn" name="Comment"/>
          <Buttons onClick={removeHandler} className="remove book-btn" name="Remove"/>
          <Buttons className="book-btn" name="Edit"/>
        </div>
      </div>
      <div className="progress flex">
        <p className="curr-ch">CURRENT CHAPTER</p>
        <p className="chap">Chapter 17</p>
        <Buttons
          type="button"
          name="UPDATE PROGRESS"
          className="pro-btn"
        />
      </div>
    </div>
  )
} 

export default Book;