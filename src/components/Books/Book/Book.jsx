import Buttons from "../../Buttons/Buttons";

const Book = (props) => {
  return (
    <div>
        <div className="category"></div>
        <div className="title"></div>
        <div className="author"></div>
        <Buttons name="Remove"/>
    </div>
  )
} 

export default Book;