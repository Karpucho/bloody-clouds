const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
const PORT = config.get('serverPort')
// 23.106.56.12

const start = async () => {
  try {
    
    await mongoose.connect(config.get('dbUrl'), { useNewUrlParser: true, useUnifiedTopology: true })

    app.listen(PORT, () => {
      console.log('Сервер стартовал на порте: ', PORT);
    })
  } catch (error) {
    
  }
}

start()
