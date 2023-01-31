// const express = require('express');
const router = require('express').Router();

const userController = require('../controllers/userController');

// create new user
router.post('/', userController.createUser, (req, res, next) => {
  return res.status(200).json(res.locals.userCreated);
});

//get user info
router.get('/:user_id', userController.getUser, (req, res, next) => {
  return res.status(200).json(res.locals.userInfo);
});

//update user
// router.put('/item_id', userController.updateUser, (req, res, next) => {
//   return res.status(200).json(res.locals.updatedUser);
// });

//delete user
router.delete('/:user_id', userController.deleteUser, (req, res, next) => {
  return res.status(200).json(res.locals.deletedUser);
});

module.exports = router;
