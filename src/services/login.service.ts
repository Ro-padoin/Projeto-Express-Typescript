import connection from '../models/connection';
import UserModel from '../models/users.model';
import generateToken from '../helpers/generateToken';
import { User } from '../interface/user.interface';

const message = 'Username or password invalid';

export default class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createLogin(user: User) {
    const { username, password } = user;

    const result = await this.model.getByUsername(username);
    
    if (!result || result.username !== username || result.password !== password) { 
      throw new Error(message);
    }
    
    const { password: trashPassword, ...dataToToken } = result;

    const token = generateToken(dataToToken);
    
    return token;
  }
}