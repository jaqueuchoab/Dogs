import React from 'react';
import {Link} from  'react-router-dom';
import Input from '../Forms/Input.js';
import Button from '../Forms/Button.js';
import useForm from '../../Hooks/useForm.js';
import { TOKEN_POST } from '../../api.js';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  async function handleSubmit(event) {
    event.preventDefault();
    if(username.validate && password.validate) {
      const { url, options } = TOKEN_POST({
        username: username.value, 
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();

      console.log(json)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        <Button>Enviar</Button>
      </form>
      <Link to='/login/create'>Cadastro</Link>
    </section>
  )
}

export default LoginForm;
