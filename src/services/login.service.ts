import connection from '../models/connection';
import LoginModel from '../models/login.model';
import generateToken from '../helpers/generateToken';
// import User from '../interface/user.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async createLogin(user: any) {
    const userCreated = await this.model.createLogin(user);
    
    const { password, ...dataToToken } = userCreated;

    const token = generateToken(dataToToken);
    console.log('service');
    
    return token;
  }
}