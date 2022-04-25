import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import './app.less'
import Registration from './Authorization/Registration.jsx';
import Login from './Authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './Disk/Disk';

function App() {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(auth())
  }, [])

  return (
   <BrowserRouter>
    <div className="app">
      <Navbar />
        <div className="wrap">
          {!isAuth ?
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Disk />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          }
        </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
