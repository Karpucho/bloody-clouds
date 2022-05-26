import React from 'react';
import { Link } from 'react-router-dom';
import './plug.css'

function Plug() {
  return (
    <div className='plugContainer'>
      <div className="plug">Чтобы попасть в кровавое облако, пожалуйста, <Link to='/login'>авторизуйтесь</Link></div>
    </div>
  );
}

export default Plug;
