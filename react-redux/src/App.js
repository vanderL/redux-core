import React from 'react';
import { connect } from 'react-redux';

const incrementar = () => ({ type: 'INCREMENTAR' });
const reduzir = () => ({ type: 'REDUZIR' });

const App = ({ contador, incrementar, reduzir}) => {
  
  return (
    <div>
      <h1> Total: {contador}</h1>
      <button onClick={incrementar}>
        Incrementar
      </button>
      <button onClick={reduzir} >
        Reduzir
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { contador: state };
};

const mapDispatchToProps = {
  incrementar,
  reduzir
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
