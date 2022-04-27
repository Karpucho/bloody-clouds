import React from 'react';
import './file.less';
import dirLogo from '../../../../assets/img/dir.svg';
import fileLogo from '../../../../assets/img/file.svg';
import { useDispatch } from 'react-redux';
import { setCurrentDir } from '../../../../reducers/fileReducer';

function File({file}) {

  const dispatch = useDispatch();

  function openDirHandler() {
    dispatch(setCurrentDir(file._id))
  }

  return (
    <div className='file' onClick={file.type === 'dir' ? ()=> openDirHandler() : ''}>
      <img src={file.type === 'dir' ? dirLogo : fileLogo} alt='file_pic' className='file_img'/>
      <div className='file_name'>{file.name}</div>
      <div className='file_date'>{file.date.slice(0, 10)}</div>
      <div className='file_size'>{file.size}</div>
    </div>
  );
}

export default File;
