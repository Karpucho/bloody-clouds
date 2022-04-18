const Router = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();

router.post(
  '/registration',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Пароль должен быть длиннее 3 символов и короче 12').isLength({ min: 3, max: 12 }),
  ],
  async (req, res) => {
    try {
      // console.log(req.body, 'БОДИ');
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Некорректный запрос', errors });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: `Пользователь с таким ${email} уже существует` });
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashPassword });

      await user.save();
      return res.json({ message: 'Пользователь зарегистрирован успешно' });
    } catch (error) {
      console.log(error);
      res.send({ message: 'Server in anus' });
    }
  },
);

router.post('/login', async (req, res) => {
  try {
    // console.log(req.body, 'БОДИ');
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    const isPassValid = bcrypt.compareSync(password, user.password);
    if (!isPassValid) {
      return res.status(400).json({ message: 'Пароль не совпадает' });
    }

    const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '5h' });

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        diskSpace: user.diskSpace,
        usedSpace: user.usedSpace,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({ message: 'Server in anus' });
  }
});

router.get(
  '/auth',
  authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const token = jwt.sign({ id: user.id }, config.get('secretKey'), { expiresIn: '5h' });

      return res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          diskSpace: user.diskSpace,
          usedSpace: user.usedSpace,
          avatar: user.avatar,
        },
      });
    } catch (error) {
      console.log(error);
      res.send({ message: 'Server in anus' });
    }
  },
);

module.exports = router;
