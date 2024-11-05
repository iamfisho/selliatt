class UserController {
  constructor(signUpUser, activeUsers){
    this.signUpUser = signUpUser;
    this.activeUsers = activeUsers;
  }

  async signup(req, res){
    const { username } = req.body;
    try {
      const user = await this.signUpUser.execute(username);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async users(req, res){
    try {
      const users = await this.activeUsers.execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  get router(){
    const router = require('express').Router();
    router.post('/', this.signup.bind(this));
    router.get('/', this.users.bind(this));
    return router;
  }
}

module.exports = UserController;