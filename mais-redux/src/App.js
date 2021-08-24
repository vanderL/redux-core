import React from 'react';
import { useDispatch } from 'react-redux';
import { adicionarDatas } from './store/date';

function App() {
  const [partida, setPartida] = React.useState('');
  const [retorno, setRetorno] =  React.useState('');
  const [nome, setNome] =  React.useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(adicionarDatas({ partida, retorno, nome}));

  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="nome">nome</label>
        <input 
          type="txt" 
          id="nome" 
          name="nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
      </p>
      <p>
        <label htmlFor="partida">Partida</label>
        <input 
          type="date" 
          id="partida" 
          name="partida"
          value={partida}
          onChange={({ target }) => setPartida(target.value)}
        />
      </p>
      <p>
        <label htmlFor="retorno">Retorno</label>
        <input
          type="date"
          id="retorno" 
          name="retorno"
          value={retorno}
          onChange={({ target }) => setRetorno(target.value)}
        />
      </p>
      <button>Buscar</button>
    </form>
  );
}

export default App;
