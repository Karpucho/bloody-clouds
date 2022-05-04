import React, { useState } from 'react';
import './navbar.less'
import Logo from '../../assets/img/navbar-logo.svg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/userReducer';
import { searchFiles } from '../../actions/file';

function Navbar(props) {

  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')

  function searchChangeHandler(event) {
    setSearchName(event.target.value)
    dispatch(searchFiles(searchName)) // проверить
  }

  return (
    <div className='navbar'>
      <div className="container">
        <img src={Logo} alt="" className="navbar_logo" />
        <div className="navbar_header">Bloody Cloud</div>
        {isAuth && <input 
            value={searchName}
            onChange={(event) => searchChangeHandler(event)}
            className="navbar_search" 
            type="text" 
            placeholder="Поиск файла" />}
        {!isAuth && <div className="navbar_login"><Link to='/login'>Логин</Link></div>}
        {!isAuth && <div className="navbar_registration"><Link to='/registration'>Регистрация</Link></div>}
        {isAuth && <div className="navbar_login" onClick={() => dispatch(logout())}>Выход</div>}
      </div>
    </div>
  );
}

export default Navbar;
