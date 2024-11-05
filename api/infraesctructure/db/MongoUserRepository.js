const UserModel = require('../../models/User');
const UserRepository = require('../../repositories/UserRepository');

class MongoUserRepository extends UserRepository {
  async save(user) {
    const userModel = new UserModel(user);
    await userModel.save();
  }

  async findById(userId) {
    return await UserModel.findOne({ userId });
  }

  async findAll() {
    return await UserModel.find();
  }
  
  async findByUsername(username) {
    return await UserModel.findOne({ username });
  }
  
  async listActiveUsers() {
    return await UserModel.find();
    //return await UserModel.find({ active: true });
  }
}

module.exports = MongoUserRepository;