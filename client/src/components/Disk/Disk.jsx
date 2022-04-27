import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles } from '../../actions/file';
import FileList from './FileList//FileList'
import Popup from './Popup';
import './disk.less'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer';


function Disk(props) {

  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

  useEffect(()=> {
    dispatch(getFiles(currentDir))
  }, [currentDir]) // возможно в массив добавить dispatch

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler() {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
  }

  return (
    <div className='disk'>
      <div className="disk_btns">
        <button className="disk_back" onClick={() => backClickHandler()}>Назад</button>
        <button className="disk_create" onClick={() => showPopupHandler()}>Создать папку</button>
      </div>
      <FileList />
      <Popup />
    </div>
  );
}

export default Disk;

