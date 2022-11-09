import { useDispatch } from "react-redux";
import { checkStatus } from "../Redux/Categories/Categories";
import Buttons from '../Buttons/Buttons';
import './Categories.css'

const Categories = () => {
  const dispatch = useDispatch()

  const checkStatusHandler = () => {
    console.log('goat');
    dispatch (
      checkStatus()
    )
  }

  return (
    <div>
      <Buttons 
        onClick={checkStatusHandler}
        className="btn" 
        name="Check status" 
      />
    </div>
  )
} 

export default Categories;