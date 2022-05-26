import React from 'react';
import './file.css';
import dirLogo from '../../../../assets/img/dir.svg';
import fileLogo from '../../../../assets/img/file.svg';
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/file';
import sizeFiles from '../../../../utils/sizeFormat';

function File({file}) {

  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)
  const fileView = useSelector(state => state.files.view)

  function openDirHandler(file) {
    if (file.type === 'dir') {
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
    }
  }

  function downloadClickHandler(event) {
    event.stopPropagation();
    downloadFile(file);
  }

  function deleteClickHandler(event) {
    event.stopPropagation();
    dispatch(deleteFile(file));
  }

  if (fileView === 'list') {
    return (
      <div className='file' onClick={() => openDirHandler(file)}>
        <img src={file.type === 'dir' ? dirLogo : fileLogo} alt='file_pic' className='file_img'/>
        <div className='file_name'>{file.name}</div>
        <div className='file_date'>{file.date.slice(0, 10)}</div>
        <div className='file_size'>{sizeFiles(file.size)}</div>
        { file.type !== 'dir' && <button onClick={(event) => downloadClickHandler(event)} className="file_btn file_download btn btn-outline-success">Скачать</button> }
        <button onClick={(event) => deleteClickHandler(event)} className="file_btn file_delete btn btn-outline-danger">Удалить</button>
      </div>
    );
  }

  if (fileView === 'plate') {
    return (
      <div className='file-plate' onClick={() => openDirHandler(file)}>
        <img src={file.type === 'dir' ? dirLogo : fileLogo} alt='file_pic' className='file-plate_img'/>

        <div className='file-plate_name'>{file.name}</div>
        
        <div className='file-plate_btns'>
          { file.type !== 'dir' && <button onClick={(event) => downloadClickHandler(event)} className="file-plate_btn file-plate-btn_download "></button> }
          <button onClick={(event) => deleteClickHandler(event)} className="file-plate_btn file-plate-btn_delete "></button>
        </div>
      </div>
    );
  }



}

export default File;
