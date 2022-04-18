import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import './app.less'
import Registration from './Authorization/Registration.jsx';
import Login from './Authorization/Login';
import { useSelector } from 'react-redux';

function App() {

  const isAuth = useSelector(state => state.user.isAuth)

  return (
   <BrowserRouter>
    <div className="app">
      <Navbar />
        <div className="wrap">
          {!isAuth &&
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          }
        </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
