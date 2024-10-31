const UserRepository = require('../../repositories/UserRepository');
const SignUpUser = require('../../use-cases/SignUpUser');

class InMemoryUserRepository extends UserRepository {
  constructor(){
    super();
    this.users = [];
  }

  async save(user){
    this.users.push(user);
  }

  async findById(id){
    return this.users.find(user => user.userId === id);
  }

  async findAll(){
    return this.users;
  }

}

describe('SignUpUser Use Case', () => {
  let userRepository;
  let signUpUser;

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    signUpUser = new SignUpUser(userRepository);
  });

  it('Should create a new user with a unique userId', async () => {
    const user = await signUpUser.execute('username1');
    expect(user).toHaveProperty('userId');
    expect(user).toHaveProperty('username', 'username1');
  });

  it('Should throw an error if username is not provided', async () => {
    await expect(signUpUser.execute()).rejects.toThrow('Username is required');
  });

});