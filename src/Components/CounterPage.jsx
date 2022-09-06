import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { increase } from '../features/userslice';
import { decrease } from '../features/userslice';

const CounterPage = () => {

  const [count,setCount]=useState(0);
  const dispatch = useDispatch();
  const handleIncrease=(e)=>{
    e.preventDefault();
    setCount(count+1);
    dispatch(increase({
     counter:count
    }));
  }
  const handleDecrease=(e)=>{
    e.preventDefault();
    setCount(count-1);
    dispatch(decrease({
     counter:count
    }));
  }
  return (
    <>
    <div>{count}</div>
    <br/>
    <button onClick={(e)=>handleIncrease(e)}>Increase</button>
    <button onClick={(e)=>handleDecrease(e)}>Decrease</button>
    </>
  )
}

export default CounterPage