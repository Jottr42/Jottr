const db = require('../models/jottrModel.js');

const userController = {};

userController.createUser = async (req, res, next) => {
  console.log(`req.body======`, req.body);
  const { name, email, password } = req.body;
  res.locals.newUser = name;
  const insertArray = [name, email, password];
  const sqlQuery = `
  INSERT INTO users (name, email, password) VALUES ($1, $2, $3);
  `;
  try {
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result =======================`, result);
    res.locals.userCreated = 'User was successfully created';
    return next();
  } catch (err) {
    next({
      log: `Error in userController.createUser. Details: ${err}`,
      message: { err: 'An error occurred in userController.createUser' },
    });
  }
};

userController.getUser = async (req, res, next) => {
  console.log(`req.params in GET USER======`, req.params);
  const { item_id } = req.params;
  const insertArray = [item_id];

  try {
    const sqlQuery = `SELECT * FROM users where item_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.userInfo = result.rows[0];
    return next();
  } catch (err) {
    next({
      log: `Error in userController.getUsers. Details: ${err}`,
      message: { err: 'An error occurred in userController.getUser' },
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

userController.deleteUser = async (req, res, next) => {
  console.log(`req.params in DELETE USER======`, req.params);
  const { user_id } = req.params;
  const insertArray = [user_id];

  try {
    const sqlQuery = `DELETE FROM users WHERE item_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.deletedUser = 'User has been deleted';
    return next();
  } catch (err) {
    next({
      log: `Error in userController.deleteUsers. Details: ${err}`,
      message: { err: 'An error occurred in userController.deleteUser' },
    });
  }
};

module.exports = userController;
