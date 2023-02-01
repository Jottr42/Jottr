// const express = require('express');
const router = require('express').Router();

const recordsController = require('../controllers/recordsController');

router.get(
  '/allRecords/:client_id',
  recordsController.getAllRecords,
  (req, res, next) => {
    return res.status(200).json(res.locals.allRecordsInfo);
  }
);

// create new client
router.post('/', recordsController.createRecord, (req, res, next) => {
  return res.status(200).json(res.locals.recordCreated);
});

//get record info
router.get('/:record_id', recordsController.getRecord, (req, res, next) => {
  return res.status(200).json(res.locals.recordInfo);
});

//update client
// router.put('/client_id', clientController.updateClient, (req, res, next) => {
//   return res.status(200).json(res.locals.updatedClient);
// });

// delete client
router.delete(
  '/:record_id',
  recordsController.deleteRecord,
  (req, res, next) => {
    return res.status(200).json(res.locals.deletedRecord);
  }
);

module.exports = router;
