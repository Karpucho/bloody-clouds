import React from 'react';
import { useSelector } from 'react-redux';
import './fileList.less';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import File from './File/File';

function FileList() {

  const files = useSelector(state => state.files.files); // проверить key

  if (!files.length) {
    return (
      <div className="loader">Эта папка пока пуста</div>
    )
  }

  return (
    <div className="filelist">
      <div className="filelist_header">
        <div className="filelist_name">Название</div>
        <div className="filelist_date">Дата</div>
        <div className="filelist_size">Размер</div>
      </div>
      <TransitionGroup>
        {files.map(file =>
          <CSSTransition
            key={file._id}
            timeout={500}
            classNames={'file'}
            exit={false}
            >
            <File file={file} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default FileList;
