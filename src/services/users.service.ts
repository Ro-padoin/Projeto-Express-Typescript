import connection from '../models/connection';
import UsersModel from '../models/users.model';
import generateToken from '../helpers/generateToken';
import { User } from '../interface/user.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createNewUser(user: User) {
    const userCreated = await this.model.createNewUser(user);
    
    const { password, ...dataToToken } = userCreated;

    const token = generateToken(dataToToken);
    return token;
  }
}