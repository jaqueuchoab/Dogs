import React from 'react';
import {Routes, Route, Navigate} from  'react-router-dom';
import LoginForm from './LoginForm.js';
import LoginCreate from './LoginCreate.js';
import LoginPasswordLost from './LoginPasswordLost.js';
import LoginPasswordReset from './LoginPasswordReset.js';
import { UserContext } from '../../UserContext.js';
import stylesLogin from '../../Styles/StylesLogin/Login.module.css';
import NotFound from '../NotFound.js';

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to='/conta'/>

  return (
    <section className={stylesLogin.login}>
      <div className={stylesLogin.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />}/>
          <Route path='/create' element={<LoginCreate />}/>
          <Route path='/lost' element={<LoginPasswordLost />}/>
          <Route path='/reset' element={<LoginPasswordReset />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
    </section>
  )
}

export default Login;
