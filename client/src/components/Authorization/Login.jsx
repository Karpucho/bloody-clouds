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
    <form className='authorization'>
      <div className="authorization_header">Логин</div>
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
      <button onClick={()=>{dispatch(login(email, password)); navigate('/')}} 
              type="submit" 
              className="btn btn-primary btn-lg">Войти</button>
    </form>
  );
}

export default Login;
