import React from 'react';
import { useSelector } from 'react-redux';
import './fileList.less';
import File from './File/File';

function FileList(props) {

  const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file} />); // проверить key

  return (
    <div className="filelist">
      <div className="filelist_header">
        <div className="filelist_name">Название</div>
        <div className="filelist_date">Дата</div>
        <div className="filelist_size">Размер</div>
      </div>
      {files.length > 0 ? files : 'пусто'}
    </div>
  );
}

export default FileList;
