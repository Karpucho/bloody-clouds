import React from 'react';
import './uploader.less';
import UploadFile from './UploadFile';

function Uploader(props) {
  return (
    <div className="uploader">
      <div className="uploader_header">
        <div className="uploader_title">Загрузки</div>
        <button className="uploader_close">X</button>
      </div>
      { files.length ? files.map(file => <UploadFile key={file._id} file={file} />) : 'пусто' }

    </div>
  );
}

export default Uploader;
