const Router = require('express');
const fileController = require('../controllers/fileController');
const authMiddleware = require('../middleware/auth.middleware');

const router = new Router();

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const config = require('config');
// const { check, validationResult } = require('express-validator');
// const User = require('../models/User');

router.post('', authMiddleware, fileController.createDir);
router.get('', authMiddleware, fileController.getFiles);

module.exports = router;
