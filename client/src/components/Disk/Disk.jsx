import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFiles, uploadFile } from '../../actions/file';
import FileList from './FileList//FileList'
import Popup from './Popup';
import './disk.less'
import { setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer';
import Uploader from './Uploader/Uploader';


function Disk(props) {

  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)
  const loader = useSelector(state => state.app.loader)
  const dirStack = useSelector(state => state.files.dirStack)
  const [dragEnter, setDragEnter] = useState(false)
  const [sort, setSort] = useState('type')

  useEffect(()=> {
    dispatch(getFiles(currentDir, sort))
  }, [currentDir, sort]) // возможно в массив добавить dispatch

  function showPopupHandler() {
    dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler() {
    const backDirId = dirStack.pop()
    dispatch(setCurrentDir(backDirId))
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }

  function dragEnterHandler(event) {
    event.preventDefault()
    event.stopPropagation()

    setDragEnter(true)
  }

  function dragLeaveHandler(event) {
    event.preventDefault()
    event.stopPropagation()

    setDragEnter(false)
  }

  function dropHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    
    let files = [...event.dataTransfer.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
    setDragEnter(false)
  }

  if (loader === true) {
    return (
      <div className="loader">
        <div className="lds-dual-ring"></div>
      </div>
    )
  }

  return ( !dragEnter ?// возможно добавить слушатели onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler} в див disk
    <div className='disk' onDragEnter={dragEnterHandler}> 
      <div className="disk_btns">

        {currentDir && <button className="disk_back" onClick={() => backClickHandler()}>Назад</button>}
        <button className="disk_create" onClick={() => showPopupHandler()}>Создать папку</button>

        <div className="disk_upload">
          <label htmlFor="disk_upload-input" className="disk_upload-label">Загрузить файл</label>
          <input multiple={true} onChange={(event) => fileUploadHandler(event)} type="file" id="disk_upload-input" className="disk_upload-input" />
        </div>

        <select value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="disk_select">
          <option value="name">По имени</option>
          <option value="type">По типу</option>
          <option value="date">По дате</option>
        </select>
      </div>
      <FileList />
      <Popup />
      <Uploader />
    </div>
    :
    <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
      Переместите файлы сюда
    </div>
  );
}

export default Disk;

