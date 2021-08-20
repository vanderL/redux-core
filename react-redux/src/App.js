import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Total:  {state}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
        Incrementar
      </button><button onClick={() => dispatch({ type: 'REDUZIR' })}>
        Reduzir
      </button>
    </div>
  );
}

export default App;
