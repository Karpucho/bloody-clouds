import React, { useState } from 'react';
import Input from '../../utils/input/Input';
import './authorization.css'
import { registration } from '../../actions/user';

function Registration(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form className='authorization'>
      <div className="authorization_header">Регистрация</div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <Input value={email} 
               setValue={setEmail} 
               type="email" 
               className="form-control" 
               id="exampleInputEmail1" 
               aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <Input value={password}
               setValue={setPassword} 
               type="password" 
               className="form-control" 
               id="exampleInputPassword1" />
      </div>
      <button onClick={() => registration(email, password)} type="submit" className="btn btn-primary btn-lg">Зарегистрироваться</button>
    </form>
  );
}

export default Registration;
