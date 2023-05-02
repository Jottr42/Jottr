const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/userRouter');
const recordsRouter = require('./routes/recordsRouter');
const clientRouter = require('./routes/clientRouter');
const userController = require('./controllers/userController');
const cors = require('cors');
require('dotenv').config();
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

app.use(cors());

// {
//   origin: ["http://localhost:3000"],
//   methods: "GET, POST, PUT, DELETE, OPTIONS"
// }

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.resolve(__dirname, '../client')));

//user router
app.use('/user', userRouter);

//client router
app.use('/client', clientRouter);

//session routers
app.use('/record', recordsRouter);

//404 error handler
// app.use('/', (req, res) => {
//   return res.sendStatus(404);
// });
//Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(`Error: ${errorObj.log}`);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
