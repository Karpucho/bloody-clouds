import React from 'react';
import './profile.less';

function Profile(props) {
  return (
    <div>
      <button className="">Удалить аватар</button>
      <input type="file" className="" placeholder="Загрузить аватар" />
    </div>
  );
}

export default Profile;
