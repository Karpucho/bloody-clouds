import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDir, getFiles } from '../../actions/file';
import FileList from './FileList//FileList'
import Popup from './Popup';
import './disk.less'


function Disk(props) {

  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)

  useEffect(()=> {
    dispatch(getFiles(currentDir))
  }, [currentDir]) // возможно в массив добавить dispatch

  function createDirHandler() {
    dispatch(createDir(currentDir, 'jops'))
  }

  return (
    <div className='disk'>
      <div className="disk_btns">
        <button className="disk_back">Назад</button>
        <button className="disk_create" onClick={() => createDirHandler()}>Создать папку</button>
      </div>
      <FileList />
      <Popup />
    </div>
  );
}

export default Disk;

