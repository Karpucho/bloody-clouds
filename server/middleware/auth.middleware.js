const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Ошибка авторизации' });
    }

    const decoded = jwt.verify(token, config.get('secretKey'));
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: `${error}` });
  }
};
