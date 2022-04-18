import React from 'react';
import Input from '../../utils/input/Input';
import './registration'

function Registration(props) {
  return (
    <div className='registration'>
      <div className="registration_header">Регистрация</div>
      <Input />
      <Input />
      <Input />
      <Input />
      <button className="registration_btn">Зарегистрироваться</button>
    </div>
  );
}

export default Registration;
