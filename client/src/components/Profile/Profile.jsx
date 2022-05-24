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
    <div className="profile">
      <h4>Сменить аватар</h4>
      
      <div className="input-group">
        <input onChange={(event) => changeAvatarHandler(event)} type="file" accept='image/*' className="profile_el form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
      </div>

      <button onClick={() => dispatch(deleteAvatar())} className="profile_el btn btn-outline-danger">Удалить аватар</button>
    </div>
  );
}

export default Profile;
