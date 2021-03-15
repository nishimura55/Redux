import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from './components/post';

function App() {
  const count = useSelector((state) => state.count.count);
  const dispach = useDispatch();

  const incrementCount = () => {
    dispach({ type: 'increment_count' });
  };
  const resetCount = () => {
    dispach({ type: 'reset_count' });
  };

  return (
    <div className="App">
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>Up</button>
      <button onClick={resetCount}>Reset</button>
      <Post clickButton={incrementCount}/>
    </div>
  );
}

export default App;
