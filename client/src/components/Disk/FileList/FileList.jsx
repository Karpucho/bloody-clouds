import React from 'react';
import { useSelector } from 'react-redux';
import './fileList.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import File from './File/File';

function FileList() {

  const files = useSelector(state => state.files.files); // проверить key
  const fileView = useSelector(state => state.files.view)

  if (!files.length) {
    return (
      <div className="loader"><h3>Эта папка пока пуста</h3></div>
    )
  }

  if (fileView === 'list') {
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

  if (fileView === 'plate') {
    return (
      <div className="fileplate">
          {files.map(file => <File key={file._id} file={file} />)}
      </div>
    );
  }
}

export default FileList;
