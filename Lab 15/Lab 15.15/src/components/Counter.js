
import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dishpatch = useDispatch();
  const show = useSelector((state)=>state.showCounter);
  const counter = useSelector((state)=>state.counter);
  const toggleCounterHandler = () => {
dishpatch({type:'toggle'})
  };
  const incrementHandler = () => {
    dishpatch({type:'increment'})
  };
  const decrementHandler = () => {
    dishpatch({type:'decrement'})
  };
  const increaseHandler = ()=>{
    dishpatch({type:'increase', amount: 10})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment Counter</button>
      <button onClick={decrementHandler}>Decrement Counter</button>
      <button onClick={increaseHandler}>Increase Counter</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
