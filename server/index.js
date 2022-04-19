const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const authRouter = require('./routes/auth.routes');
const fileRouter = require('./routes/file.routes');
const corsMiddleware = require('./middleware/cors.middleware');

const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleware);
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'), { useNewUrlParser: true, useUnifiedTopology: true });

    app.listen(PORT, () => {
      console.log('Сервер стартовал на порту: ', PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
