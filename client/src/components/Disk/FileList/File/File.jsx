import React from 'react';
import './file.less';
import dirLogo from '../../../../assets/img/dir.svg';
import fileLogo from '../../../../assets/img/file.svg';
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';
import { deleteFile, downloadFile } from '../../../../actions/file';

function File({file}) {

  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)

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

  return (
    <div className='file' onClick={() => openDirHandler(file)}>
      <img src={file.type === 'dir' ? dirLogo : fileLogo} alt='file_pic' className='file_img'/>
      <div className='file_name'>{file.name}</div>
      <div className='file_date'>{file.date.slice(0, 10)}</div>
      <div className='file_size'>{file.size}</div>
      { file.type !== 'dir' && <button onClick={(event) => downloadClickHandler(event)} className="file_btn file_download">Загрузить</button> }
      <button onClick={(event) => deleteClickHandler(event)} className="file_btn file_delete">Удалить</button>
    </div>
  );
}

export default File;
