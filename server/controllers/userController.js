const db = require('../models/jottrModel.js');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    console.log(`IN CREATE USER`);
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPW = await bcrypt.hash(password, salt);
    const insertArray = [name, email, hashPW];
    const sqlQuery = `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3);
    `;

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

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //get all info from users
    console.log(`email password ====`, email, password);
    const sqlQuery = `SELECT password, user_id FROM users WHERE email = $1`;
    const insertArray = [email];
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result =======================`, result);
    const hashPW = result.rows[0].password;
    const user_id = result.rows[0].user_id;
    console.log(`userPass =====`, hashPW);
    console.log(`user_id =====`, user_id);

    bcrypt.compare(password, hashPW, (err, passMatch) => {
      //check password w/ bcrypt
      if (passMatch) {
        res.locals.userVerification = { verified: true, user_id, email };
        return next(); // returns true if password matches hashPW
      } else {
        return next({
          log: 'userController.verifyUser',
          status: 400,
          message: { err: 'Wrong username or password' },
        });
      }
    });
  } catch (err) {
    next({
      log: `Error in userController.verifyUser. Details: ${err}`,
      message: { err: 'An error occurred in userController.verifyUser' },
    });
  }
};

userController.getUser = async (req, res, next) => {
  console.log(`req.params in GET USER======`, req.params);
  const { user_id } = req.params;
  const insertArray = [user_id];

  try {
    const sqlQuery = `SELECT * FROM users where user_id = $1`;
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
