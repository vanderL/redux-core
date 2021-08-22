import React from 'react';
import { useDispatch} from 'react-redux';
import { somar } from './store/contador';
import { login } from './store/login';


const App = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({username, password}))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block'}} htmlFor="username">
          Usuário
        </label>
        <input 
          id="username"
          type="text" 
          value={username}
          onChange={({target}) => setUsername(target.value)}
        />

        <label style={{ display: 'block'}} htmlFor="password">
          Senha</label>
        <input 
          id="password" 
          type="password" 
          value={password}
          onChange={({target}) => setPassword(target.value)}
        />

        <button> {true ? 'carregando' : 'Enviar'} </button>
       
     </form>
     <button onClick={() => dispatch(somar(5))}>Somar</button>
    </div>
  );
}

export default App;
