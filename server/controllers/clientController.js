const db = require('../models/jottrModel.js');

const clientController = {};

clientController.createClient = async (req, res, next) => {
  console.log(`req.body======`, req.body);
  const { name, email, user_id } = req.body;
  //   res.locals.newUser = name;
  const insertArray = [name, email, user_id];
  const sqlQuery = `
  INSERT INTO clients (name, email, user_id) VALUES ($1, $2, $3);
  `;
  try {
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result IN CREATECLIENT=======================`, result);
    res.locals.clientCreated = 'CLIENT CREATED';
    return next();
  } catch (err) {
    next({
      log: `Error in clientController.createClient. Details: ${err}`,
      message: { err: 'An error occurred in clientController.createClient' },
    });
  }
};

clientController.getClient = async (req, res, next) => {
  console.log(`req.params in GET CLIENT======`, req.params);
  const { client_id } = req.params;
  const insertArray = [client_id];

  try {
    const sqlQuery = `SELECT * FROM clients where client_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.clientInfo = result.rows[0];
    return next();
  } catch (err) {
    next({
      log: `Error in clientController.getClient. Details: ${err}`,
      message: { err: 'An error occurred in clientController.getClient' },
    });
  }
};

clientController.getAllClients = async (req, res, next) => {
  const { user_id } = req.params;
  const insertArray = [user_id];

  try {
    const sqlQuery = `SELECT * FROM clients WHERE user_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.allClientsInfo = result.rows;
    return next();
  } catch (err) {
    next({
      log: `Error in clientController.getAllClients. Details: ${err}`,
      message: { err: 'An error occurred in clientController.getAllClients' },
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

clientController.deleteClient = async (req, res, next) => {
  console.log(`req.params in DELETE CLIENT======`, req.params);
  const { client_id } = req.params;
  const insertArray = [client_id];

  try {
    const sqlQuery = `DELETE FROM clients WHERE client_id = $1`;
    const result = await db.query(sqlQuery, insertArray);
    console.log(`result======`, result);
    res.locals.deletedClient = 'Client has been deleted';
    return next();
  } catch (err) {
    next({
      log: `Error in clientController.deleteClient. Details: ${err}`,
      message: { err: 'An error occurred in clientController.deleteClient' },
    });
  }
};

module.exports = clientController;
