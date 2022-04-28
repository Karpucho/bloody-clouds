import React from 'react';
import './file.less';
import dirLogo from '../../../../assets/img/dir.svg';
import fileLogo from '../../../../assets/img/file.svg';
import { useDispatch, useSelector } from 'react-redux';
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer';

function File({file}) {

  const dispatch = useDispatch();
  const currentDir = useSelector(state => state.files.currentDir)

  function openDirHandler(file) {
    if (file.type === 'dir') {
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
    }
  }

  return (
    <div className='file' onClick={() => openDirHandler(file)}>
      <img src={file.type === 'dir' ? dirLogo : fileLogo} alt='file_pic' className='file_img'/>
      <div className='file_name'>{file.name}</div>
      <div className='file_date'>{file.date.slice(0, 10)}</div>
      <div className='file_size'>{file.size}</div>
    </div>
  );
}

export default File;
