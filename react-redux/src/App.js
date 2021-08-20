import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { abrir, fechar } from './store/modal';


const App = () => {
  const state = useSelector(state => state);
  console.log(state)
  const dispatch = useDispatch()

  return (
    <div>
      {state.modal && <h1>Total: {state.contador.total}</h1>}
      
      <button onClick={() => dispatch(incrementar())}> Incrementar </button>
      <button onClick={() => dispatch(reduzir())}> Reduzir </button>
      <button onClick={() => dispatch(abrir())}> Abrir Modal </button>
      <button onClick={() => dispatch(fechar())}> Fechar Modal </button>
    </div>
  );
}

export default App;
