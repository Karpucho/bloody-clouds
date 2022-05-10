import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAvatar, uploadAvatar } from '../../actions/user';
import './profile.less';

function Profile(props) {
  const dispatch = useDispatch()

  function changeHandler(event) {
    const file = event.target.files[0]
    dispatch(uploadAvatar(file))
  }

  return (
    <div>
      <button onClick={() => dispatch(deleteAvatar())} className="">Удалить аватар</button>
      <input accept='image/*' onChange={(event) => changeHandler(event)} type="file" className="" placeholder="Загрузить аватар" />
    </div>
  );
}

export default Profile;
