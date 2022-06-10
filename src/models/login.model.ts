import { Pool, ResultSetHeader } from 'mysql2/promise';
// import User from '../interface/user.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  //   : Promise<User> 

  public async createLogin(user: any) {
    const { username, classe, level, password } = user;
    const QUERY = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [insertedUser] = await this.connection
      .execute<ResultSetHeader>(QUERY, [username, classe, level, password]);
    const { insertId } = insertedUser;
    console.log('model');
    
    return { id: insertId, ...user };
  }
}