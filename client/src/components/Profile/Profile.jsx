import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAvatar, uploadAvatar } from '../../actions/user';
import './profile.css';

function Profile() {
  const dispatch = useDispatch()

  function changeAvatarHandler(event) {
    const file = event.target.files[0]
    dispatch(uploadAvatar(file))
    event.target.value = ''
  }

  return (
    <div>
      <button onClick={() => dispatch(deleteAvatar())} className="">Удалить аватар</button>
      <input accept='image/*' onChange={(event) => changeAvatarHandler(event)} type="file" className="" placeholder="Загрузить аватар" />
    </div>
  );
}

export default Profile;
