import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideUploader } from '../../../reducers/uploadReducer';
import './uploader.less';
import UploadFile from './UploadFile';

function Uploader() {

  const files = useSelector(state => state.upload.files)
  const isVisible = useSelector(state => state.upload.isVisible)
  const dispatch = useDispatch()

  return ( isVisible &&
    <div className="uploader">
      <div className="uploader_header">
        <div className="uploader_title">Загрузки</div>
        <button className="uploader_close" onClick={() => dispatch(hideUploader())}>X</button>
      </div>
      { files.length ? files.map(file => <UploadFile key={file._id} file={file} />) : 'пусто' } 

    </div>
  );
}

export default Uploader;
// проверить UploadFile key={file._id}
