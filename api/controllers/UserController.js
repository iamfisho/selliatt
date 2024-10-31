class UserController {
  constructor(signUpUser) {
    this.signUpUser = signUpUser;
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

  get router(){
    const router = require('express').Router();
    router.post('/', this.signup.bind(this));
    return router;
  }
}

module.exports = UserController;