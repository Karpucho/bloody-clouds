import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/user';
import Input from '../../utils/input/Input';
import './authorization.less'

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();


  return (
    <div className='authorization'>
      <div className="authorization_header">Логин</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='Введите email' />
      <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' />
      {/* <Input type='text' placeholder='' />
      <Input type='text' placeholder='' /> */}
      <button className="authorization_btn" onClick={() => dispatch(login(email, password))}>Войти</button>
    </div>
  );
}

export default Login;
