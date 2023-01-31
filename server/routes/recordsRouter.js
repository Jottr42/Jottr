// const express = require('express');
const router = require('express').Router();

const recordsController = require('../controllers/recordsController');

// create new client
router.post('/', recordsController.createRecord, (req, res, next) => {
  return res.status(200).json(res.locals.recordCreated);
});

//get client info
// router.get('/:client_id', clientController.getClient, (req, res, next) => {
//   return res.status(200).json(res.locals.clientInfo);
// });

//update client
// router.put('/client_id', clientController.updateClient, (req, res, next) => {
//   return res.status(200).json(res.locals.updatedClient);
// });

//delete client
// router.delete(
//   '/:client_id',
//   clientController.deleteClient,
//   (req, res, next) => {
//     return res.status(200).json(res.locals.deletedClient);
//   }
// );

module.exports = router;
