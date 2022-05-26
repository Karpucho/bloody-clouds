import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir } from '../../actions/file';
import { setPopupDisplay } from '../../reducers/fileReducer';
import Input from '../../utils/input/Input';

function Popup() {

  const [dirName, setDirName] = useState('')
  const popupDisplay = useSelector(state => state.files.popupDisplay)
  const currentDir = useSelector(state => state.files.currentDir)
  const dispatch = useDispatch()

  function createDirHandler() {
    dispatch(createDir(currentDir, dirName))
    setDirName('')
    window.location.reload()
  }

  return (
    <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
      <div className="popup_content" onClick={(event) => event.stopPropagation()}>
        <div className="popup_header">
          <div className="popup_title">Создать папку</div>
          <button onClick={() => dispatch(setPopupDisplay('none'))}  className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
        </div>
        <Input value={dirName} setValue={setDirName} type='text' placeholder='Укажите название папки' />
        <button className="popup_create btn btn-outline-warning" onClick={() => createDirHandler()}>Сохранить</button>
      </div>
    </div>
  );
}

export default Popup;
