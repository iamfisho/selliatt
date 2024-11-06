require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Server } = require("socket.io");
const cors = require("cors");

const MongoUserRepository = require('./infraesctructure/db/MongoUserRepository');
const MongoMessageRepository = require('./infraesctructure/db/MongoMessageRepository');
const UserController =  require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');

const SignUpUser = require('./use-cases/SignUpUser');
const ActiveUsers = require('./use-cases/ActiveUsers');
const ListMessages = require('./use-cases/ListMessages');

socket = require('./frameworks/socketio/SocketServer');

const app = express();
const server = require('http').createServer(app);


app.use(express.json());


const userRepository = new MongoUserRepository();
const messageRepository = new MongoMessageRepository();
const signUpUser = new SignUpUser(userRepository);
const activeUsers = new ActiveUsers(userRepository);
const listMessages = new ListMessages(messageRepository);
const userController = new UserController(signUpUser, activeUsers);
const messageController = new MessageController(messageRepository, listMessages);

app.use(cors({
  origin: ["http://localhost:5173"], // Specify frontend origin
  credentials: true // Allow cookies and credentials
}));

app.use('/users', userController.router);
app.use('/messages', messageController.router);

const io = new Server(server, {
  allowEIO3: true,
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true
  }
})

const socketGateway = new socket(io,messageRepository);
socketGateway.start();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(3000, () => {
      console.log('Server running on http://localhost:3000');
    });
  })
  .catch((err) => console.error(err));

module.exports = app;