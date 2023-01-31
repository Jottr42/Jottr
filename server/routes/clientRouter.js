// const express = require('express');
const router = require('express').Router();

const clientController = require('../controllers/clientController');

// create new client
router.post('/', clientController.createClient, (req, res, next) => {
  return res.status(200).json(res.locals.clientCreated);
});

//get client info
router.get('/:client_id', clientController.getClient, (req, res, next) => {
  return res.status(200).json(res.locals.clientInfo);
});

//update client
// router.put('/client_id', clientController.updateClient, (req, res, next) => {
//   return res.status(200).json(res.locals.updatedClient);
// });

//delete client
router.delete(
  '/:client_id',
  clientController.deleteClient,
  (req, res, next) => {
    return res.status(200).json(res.locals.deletedClient);
  }
);

module.exports = router;
