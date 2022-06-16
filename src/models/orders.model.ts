import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Orders } from '../interface/order.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Orders[]> {
    const QUERY = 'SELECT * FROM Trybesmith.Orders';
    const [data] = await this.connection.execute(QUERY);
    return data as Orders[];
  }

  public async createNewOrder(id: number) {
    const QUERY = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?);';
    const result = await this.connection.execute<ResultSetHeader>(QUERY, [id]);   
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return insertId;
  }
}