import React, { useState } from 'react';
import Input from '../../utils/input/Input';
import './registration.less'
import { registration } from '../../actions/user';

function Registration(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='registration'>
      <div className="registration_header">Регистрация</div>
      <Input value={email} setValue={setEmail} type='text' placeholder='Введите email' />
      <Input value={password} setValue={setPassword} type='password' placeholder='Введите пароль' />
      {/* <Input type='text' placeholder='' />
      <Input type='text' placeholder='' /> */}
      <button className="registration_btn" onClick={() => registration(email, password)}>Зарегистрироваться</button>
    </div>
  );
}

export default Registration;
