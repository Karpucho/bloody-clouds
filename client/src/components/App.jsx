import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import './app.less'
import Registration from './Registration/Registration.jsx';

function App() {
  return (
   <BrowserRouter>
    <div className="app">
      <Navbar />
      <div className="wrap">
        <Routes>
            <Route path="/registration" element={<Registration />} />
            {/* <Route path="/card/:username/:reponame" element={<Card />} />
            <Route path="/error" element={<Error />} /> */}
        </Routes>
      </div>
    </div>
   </BrowserRouter>

  );
}

export default App;
