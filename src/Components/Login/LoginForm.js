import React from 'react';
import {Link} from  'react-router-dom';
import Input from '../Forms/Input.js';
import Button from '../Forms/Button.js';
import useForm from '../../Hooks/useForm.js';
import { UserContext } from '../../UserContext.js';
import Error from '../Helper/Error.js';
import stylesLoginForm from '../../Styles/StylesLogin/LoginForm.module.css';
import stylesButton from '../../Styles/StylesForms/Button.module.css';
import Head from '../Helper/Head.js';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if(username.validate && password.validate) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className='animeLeft'>
      <Head title='Login' />
      <h1 className='title'>Login</h1>
      <form className={stylesLoginForm.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Carregando...</Button> : <Button>Enviar</Button>}
        <Error error={error} />
      </form>
      <Link className={stylesLoginForm.lost} to='/login/lost'>Perdeu a Senha?</Link>
      <div className={stylesLoginForm.cadastro}>
        <h2 className={stylesLoginForm.subtitle} >Cadastre-se</h2>
        <p>Ainda não tem um conta? Cadastre-se no site.</p>
        <Link className={stylesButton.button} to='/login/create'>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm;
