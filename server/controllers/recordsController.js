const db = require('../models/jottrModel.js');

const recordController = {};

recordController.createRecord = async (req, res, next) => {
  console.log(`req.body======`, req.body);
  const { date, goal, session_notes, upcoming, client_id } = req.body;
  const insertArray = [date, goal, session_notes, upcoming, client_id];
  const sqlQuery = `
  INSERT INTO records (date, goal, session_notes, upcoming) VALUES ($1, $2, $3, $4, $5);
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

// userController.getUser = async (req, res, next) => {
//   console.log(`req.params in GET USER======`, req.params);
//   const { item_id } = req.params;
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

// userController.deleteUser = async (req, res, next) => {
//   console.log(`req.params in DELETE USER======`, req.params);
//   const { user_id } = req.params;
//   const insertArray = [user_id];

//   try {
//     const sqlQuery = `DELETE FROM users WHERE item_id = $1`;
//     const result = await db.query(sqlQuery, insertArray);
//     console.log(`result======`, result);
//     res.locals.deletedUser = 'User has been deleted';
//     return next();
//   } catch (err) {
//     next({
//       log: `Error in userController.deleteUsers. Details: ${err}`,
//       message: { err: 'An error occurred in userController.deleteUser' },
//     });
//   }
// };

module.exports = recordController;
