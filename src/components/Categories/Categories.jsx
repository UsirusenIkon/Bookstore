import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../../Redux/Categories/Categories';


import Buttons from '../Buttons/Buttons';
import './Categories.css'

const Categories = () => {\
  const category = useSelector((state) => state.category)
  const dispatch = useDispatch();

  const checkStatusHandler = (e) => {    
    dispatch(
      checkStatus()
    );
  }

  return (
    <div>
      <p className='txt'>{category}</p>
      <Buttons 
        onClick={checkStatusHandler}
        className="btn" 
        name="Check status" 
        type="button"
      />
    </div>
  )
} 

export default Categories;