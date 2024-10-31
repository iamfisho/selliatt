require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const MongoUserRepository = require('./frameworks/MongoUserRepository');
const SignUpUser = require('./use-cases/SignUpUser');
const UserController =  require('./controllers/UserController');

const app = express();
app.use(express.json());

const userRepository = new MongoUserRepository();
const signUpUser = new SignUpUser(userRepository);
const userController = new UserController(signUpUser);

app.use('/user', userController.router);

mongoose.connect(process.env.MONGO_URI)
.then(() => 
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  })
)
.catch((error) => { console.error(error) });

module.exports = app;