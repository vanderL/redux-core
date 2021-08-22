import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/login';


const App = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.login.user)
  //console.log(token)

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

        <button> {data.loading ? 'carregando' : 'Enviar'} </button>
        <p>{data?.id}</p>
       
     </form>
    </div>
  );
}

export default App;
