const Router = require("express");
const bcrypt = require('bcrypt');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = new Router();

router.post('registration', 
[
  check('email', 'Некорректный email').isEmail(),
  check('password', 'Пароль должен быть длиннее 3 символов и короче 12').isLength({min: 3, max: 12})
], 
async (req, res) => {
  try {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({message: 'Некорректный запрос', errors})
    }
    
    const {email, password} = req.body;
    const candidate = User.findOne({email});

    if (candidate) {
      return res.status(400).json({message: `Пользователь с таким ${email} уже существует`})
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({email, password: hashPassword});

    await user.save();
    return res.json({message: 'Пользователь зарегистрирован успешно'})
  } catch (error) {

    console.log(error);
    res.send({message: "Server in anus"})
  }
})
