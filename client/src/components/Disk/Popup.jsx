import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir } from '../../actions/file';
import { setPopupDisplay } from '../../reducers/fileReducer';
import Input from '../../utils/input/Input';

function Popup(props) {

  const [dirName, setDirName] = useState('')
  const popupDisplay = useSelector(state => state.files.popupDisplay)
  const currentDir = useSelector(state => state.files.currentDir)
  const dispatch = useDispatch()

  function createDirHandler() {
    dispatch(createDir(currentDir, dirName))
    setDirName('')
  }

  return (
    <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
      <div className="popup_content" onClick={(event) => event.stopPropagation()}>
        <div className="popup_header">
          <div className="popup_title">Создать новую папку</div>
          <button className="popup_close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
        </div>
        <Input value={dirName} setValue={setDirName} type='text' placeholder='Введите название папки' />
        <button className="popup_create" onClick={() => createDirHandler()}>Создать что-то</button>
      </div>
    </div>
  );
}

export default Popup;
