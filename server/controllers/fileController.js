const config = require('config');

const fileService = require('../services/fileService');
const File = require('../models/File');
const User = require('../models/User');

class FileController {
  async createDir(req, res) {
    try {
      const { name, type, parent } = req.body;
      const file = new File({
        name, type, parent, user: req.user.id,
      });

      const parentFile = await File.findOne({ _id: parent });

      if (!parentFile) {
        file.path = name;
        await fileService.createDir(file);
      } else {
        file.path = `${parentFile.path}/${file.name}`; // в конце слэш?
        await fileService.createDir(file);
        parentFile.childs.push(file._id);
        await parentFile.save();
      }

      await file.save();
      return res.json(file);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json(error);
    }
  }

  async getFiles(req, res) {
    try {
      const files = await File.find({ user: req.user.id, parent: req.query.parent });
      return res.json(files);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Нет такого файла' });
    }
  }

  async uploadFile(req, res) {
    try {
      const { file } = req.files; // TODO: проверить деструктуризацию, сделать req.files.file

      const parent = await File.findOne({ user: req.user.id, _id: req.body.parent });

      const user = await User.findOne({ _id: req.user.id });

      if (user.usedSpace + file.size > user.diskSpace) {
        return res.status(400).json({ message: 'На диске не хватает свободного места' });
      }

      user.usedSpace += file.size;

      let path;

      if (parent) {
        path = `${config.get('filePath')}/${user._id}/${parent.path}/${file.name}`
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Ошибка загрузки' });
    }
  }
}

module.exports = new FileController();
