import { Pool } from 'mysql2/promise';
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
}