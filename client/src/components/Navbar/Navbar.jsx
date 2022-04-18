import React from 'react';
import './navbar.less'
import Logo from '../../assets/img/navbar-logo.svg'

function Navbar(props) {
  return (
    <div className='navbar'>
      <div className="container">
        <img src={Logo} alt="" className="navbar_logo" />
        <div className="navbar_header">Bloody Cloud</div>
        <div className="navbar_login">Логин</div>
        <div className="navbar_registration">Регистрация</div>
      </div>
    </div>
  );
}

export default Navbar;
