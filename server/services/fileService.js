const fs = require('fs');
const config = require('config');
const File = require('../models/File');

class FileService {
  createDir(file) {
    const filePath = `${config.get('filePath')}/${file.user}/${file.path}`; // проверить слэши на обратные
    return new Promise(((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath); // fs.mkdirSync(filePath, { recursive: true })
          return resolve({ message: 'Файл создан!' });
        }
        return reject({ message: 'Файл уще существует!' });
      } catch (error) {
        return reject({ message: 'Файловая ошибка!' });
      }
    }));
  }
}

module.exports = new FileService();
