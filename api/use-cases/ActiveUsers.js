const User = require("../entities/User");

class ActiveUsers {
  constructor(userRepository){
    this.userRepository = userRepository;
  }

  async execute(){
    return await this.userRepository.listActiveUsers();
  }
}

module.exports = ActiveUsers;