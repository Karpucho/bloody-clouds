import React from 'react';
import './navbar.less'
import Logo from '../../assets/img/navbar-logo.svg'
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="container">
        <img src={Logo} alt="" className="navbar_logo" />
        <div className="navbar_header">Bloody Cloud</div>
        <div className="navbar_login"><Link to='/login'>Логин</Link></div>
        <div className="navbar_registration"><Link to='/registration'>Регистрация</Link></div>
      </div>
    </div>
  );
}

export default Navbar;
