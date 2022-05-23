import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';
import Input from '../../utils/input/Input';
import './authorization.css'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

  return (
    <div className='authorization'>
      <div className="authorization_header">Логин</div>
        <Input value={email} setValue={setEmail} type='text' placeholder='Введите email' />
        <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' />
      <button className="authorization_btn" onClick={() => {dispatch(login(email, password)); navigate('/')}}>Войти</button>
    </div>
  );
}

export default Login;
