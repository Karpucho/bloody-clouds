const fs = require('fs');
const config = require('config');
// const File = require('../models/File');

class FileService {
  createDir(file) {
    const path = this.getPath(file); // сменил filePath на path, путь засунул в функцию

    return new Promise(((resolve, reject) => {
      try {
        if (!fs.existsSync(path)) {
          // eslint-disable-next-line max-len
          fs.mkdirSync(path, { recursive: true }); // возможно fs.mkdirSync(filePath, { recursive: true }) и убрать Sync
          resolve({ message: 'Файл создан!' }); // возможно добавить returnы перед резолвами реджектами или после return без ничего
        }
        // reject({ message: 'Файл уще существует!' });
        reject(new Error('Файл уще существует!'));
      } catch (error) {
        // reject({ message: 'Файловая ошибка!' });
        // reject(new Error('Файловая ошибка!'));
        reject(error.message);
      }
    }));
  }

  deleteFile(file) {
    const path = this.getPath(file);
    if (file.type === 'dir') {
      fs.rmdirSync(path);
    } else {
      fs.unlinkSync(path);
    }
  }

  getPath(file) {
    return `${config.get('filePath')}/${file.user}/${file.path}`; // проверить слэши на обратные и нужность последнего
  }
}

module.exports = new FileService();
