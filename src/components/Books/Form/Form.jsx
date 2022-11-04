import './Form.css'
import Buttons from "../../Buttons/Buttons";

const Form = () => {
  return (
    <div className='form-container'>
      <h2>ADD NEW BOOK</h2>
      <form
      class="form flex"
      method="post">
        <div class="input flex">
          <label for="book-name">
            <input
              name="fullname"
              class="wf"
              type="text"
              placeholder="Book Title"
              maxlength="30"
              id="book-name"
              required
            />
          </label>
          <label for="author">
            <input
              name="email"
              class="wf"
              type="text"
              placeholder="Author"
              maxlength="30"
              id="author"
              required
            />
          </label>
        </div>
      <Buttons className="reg-btn" type="submit" name="Add Book"/>
      <i class="error msg"></i>
      </form>
    </div>
  )
}

export default Form;