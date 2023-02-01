const db = require('../models/jottrModel.js');

const recordsController = {};

recordsController.createRecord = async (req, res, next) => {
  console.log(`req.body IN CREATE RECORD======`, req.body);
  const { date, goal, session_notes, upcoming, client_id } = req.body;
  const insertArray = [date, goal, session_notes, upcoming, client_id];
  const sqlQuery = `
  INSERT INTO records (date, goal, session_notes, upcoming, client_id) VALUES ($1, $2, $3, $4, $5);
  `;
  try {
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result =======================`, result);
    res.locals.recordCreated = 'Record was successfully created';
    return next();
  } catch (err) {
    next({
      log: `Error in recordController.createRecord. Details: ${err}`,
      message: { err: 'An error occurred in recordController.createRecord' },
    });
  }
};

recordsController.getRecord = async (req, res, next) => {
  console.log(`req.params in GET Record======`, req.params);
  const { record_id } = req.params;
  const insertArray = [record_id];

  try {
    const sqlQuery = `SELECT * FROM records where record_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.recordInfo = result.rows[0];
    return next();
  } catch (err) {
    next({
      log: `Error in recordController.getRecords. Details: ${err}`,
      message: { err: 'An error occurred in recordController.getRecords' },
    });
  }
};

// userController.updateUser = (req, res, next) => {
//   console.log(`req.body in UPDATE USER======`, req.params);
//   // const { item_id } = req.params;
//   const {item_id, name, email, password} = req.body;
//   const insertArray = [item_id];

//   try {
//     const sqlQuery = `SELECT * FROM users where item_id = $1`;
//     const result = await db.query(sqlQuery, insertArray);
//     console.log(`result======`, result);
//     res.locals.userInfo = result.rows[0];
//     return next();
//   } catch (err) {
//     next({
//       log: `Error in userController.getUsers. Details: ${err}`,
//       message: { err: 'An error occurred in userController.getUser' },
//     });
//   }
// };

recordsController.deleteRecord = async (req, res, next) => {
  console.log(`req.params in DELETE RECORD======`, req.params);
  const { record_id } = req.params;
  const insertArray = [record_id];

  try {
    const sqlQuery = `DELETE FROM records WHERE record_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.deletedRecord = 'Record has been deleted';
    return next();
  } catch (err) {
    next({
      log: `Error in recordController.deleteRecord. Details: ${err}`,
      message: { err: 'An error occurred in recordController.deleteRecord' },
    });
  }
};

module.exports = recordsController;
