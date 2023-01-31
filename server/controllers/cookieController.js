const db = require('../models/jottrModel.js');

const cookieController = {};

cookieController.set = (req, res, next) => {
  console.log('cookiessss');
  res.cookie('jottrLoggedin123', true, {
    expire: new Date() + 86400000,
    httpOnly: true,
  });
  return next();
};

cookieController.delete = (req, res, next) => {
  clearCookie('jottrLoggedin');
  res.locals.cookieDeleted = 'Cookie deleted';
  return next();
};

module.exports = cookieController;
