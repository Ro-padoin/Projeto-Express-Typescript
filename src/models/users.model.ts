import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interface/user.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createNewUser(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const QUERY = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    const [insertedUser] = await this.connection
      .execute<ResultSetHeader>(QUERY, [username, classe, level, password]);
    const { insertId } = insertedUser;
    return { id: insertId, ...user };
  }

  public async getByUsername(username: string): Promise<User> {
    const QUERY = 'SELECT id, username, password FROM Trybesmith.Users WHERE username=?;';
    const result = await this.connection
      .execute(QUERY, [username]);
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }
}