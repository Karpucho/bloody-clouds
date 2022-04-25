const fs = require('fs');
const config = require('config');
const File = require('../models/File');

class FileService {
  createDir(file) {
    const filePath = `${config.get('filePath')}/${file.user}/${file.path}`; // проверить слэши на обратные

    return new Promise(((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          // eslint-disable-next-line max-len
          fs.mkdirSync(filePath, { recursive: true }); // возможно fs.mkdirSync(filePath, { recursive: true })
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
}

module.exports = new FileService();
