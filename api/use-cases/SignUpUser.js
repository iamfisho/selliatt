const User = require("../entities/User");

class SignUpUser {
  constructor(userRepository){
    this.userRepository = userRepository;
  }

  async execute(username){
    if(!username){
      throw new Error('Username is required');
    }

    const existingUser = await this.userRepository.findByUsername(username);
    if(existingUser){
      throw new Error('Username is already taken');
    }

    const user = new User(username);
    await this.userRepository.save(user);
    return user;
  }
}

module.exports = SignUpUser;