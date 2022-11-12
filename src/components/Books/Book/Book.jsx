import { useDispatch } from "react-redux";
import Buttons from "../../Buttons/Buttons";
import { removeBook } from "../../../Redux/Books/Book";

const Book = ({ title, author, id }) => {

  const dispatch = useDispatch()

  const removeHandler = () => {
    dispatch (
      removeBook(id)
    )
  }

  return (
    <div>
        <h3 className="title">{title}</h3>
        <p className="author">{author}</p>
        <div>
          <Buttons name="Comment"/>
          <Buttons onClick={removeHandler} className="remove" name="Remove"/>
          <Buttons name="Edit"/>
        </div>
    </div>
  )
} 

export default Book;