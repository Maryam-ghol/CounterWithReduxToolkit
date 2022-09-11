import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { increase } from '../features/userslice';
import { decrease } from '../features/userslice';
import ChildNum1 from './ChildNum1';
import ChildNum2 from './ChildNum2';
import ChildNum3 from './ChildNum3';

const CounterPage = () => {

  const [count, setCount] = useState(0);
  const [cild3Text,setChild3Text]= useState("");
  const handleSubmit=(e,myText)=>{
    e.preventDefault();
    setChild3Text(myText);
  }
  const dispatch = useDispatch();
  const handleIncrease = (e) => {
    e.preventDefault();
    setCount(count + 1);
    dispatch(increase({
      counter: count
    }));
  }
  const handleDecrease = (e) => {
    e.preventDefault();
    setCount(count - 1);
    dispatch(decrease({
      counter: count
    }));
  }
  return (
    <>
      <div>{count}</div>
    
     
      <button onClick={(e) => handleIncrease(e)}>Increase</button>
      <button onClick={(e) => handleDecrease(e)}>Decrease</button>
      <br /><br /><br />
      <div>This is the value coming from Child 3:{cild3Text}</div>
      <div>
        <ChildNum1 />
      </div>
      <div>
        <ChildNum2 />
      </div>
      <div>
        <ChildNum3 handleSubmit={handleSubmit}/>
      </div>
    </>
  )
}

export default CounterPage