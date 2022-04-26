import React, { useState } from 'react';
import Input from '../../utils/input/Input';

function Popup(props) {

  const [dirName, setDirName] = useState('')

  return (
    <div className="popup">
      <div className="popup_content">
        <div className="popup_header">
          <div className="popup_title">Создать новую папку</div>
          <button className="popup_close">X</button>
        </div>
        <Input value={dirName} setValue={setDirName} type='text' placeholder='Введите название папки' />
        <button className="popup_create">Создать что-то</button>
      </div>
    </div>
  );
}

export default Popup;
