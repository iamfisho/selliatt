const { v4: uuidv4 } = require('uuid');

class User {
  constructor(username){
    this.userId = uuidv4();
    this.username = username;
  }
}

module.exports = User;