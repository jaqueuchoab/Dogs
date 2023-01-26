import React from 'react';
import {Routes, Route} from  'react-router-dom';
import LoginForm from './LoginForm.js';
import LoginCreate from './LoginCreate.js';
import LoginPasswordLost from './LoginPasswordLost.js';
import LoginPasswordReset from './LoginPasswordReset.js';



const Login = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='/create' element={<LoginCreate />}/>
        <Route path='/lost' element={<LoginPasswordLost />}/>
        <Route path='/reset' element={<LoginPasswordReset />}/>
      </Routes>
    </div>
  )
}

export default Login;
