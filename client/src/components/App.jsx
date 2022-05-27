import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import './app.css'
import Registration from './Authorization/Registration.jsx';
import Login from './Authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';
import Disk from './Disk/Disk';
import Profile from './Profile/Profile';
import Plug from './Plug/Plug';
import Footer from './Footer/Footer';
import Tetris from './Tetris/Tetris';

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
              <Route path="/" element={<Plug />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
              <Route path="/tetris" element={<Tetris />} />
            </Routes>
            :
            <Routes>
              <Route path="/" element={<Disk />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          }
        </div>
      <Footer />
    </div>
   </BrowserRouter>
  );
}

export default App;
