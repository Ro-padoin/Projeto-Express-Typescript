import { Pool } from 'mysql2/promise';
import { Product } from '../interface/product.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders(): Promise<Product[]> {
    const QUERY = `SELECT or.id, or.userId, pro.id AS productsIds
    FROM Orders AS or
    INNER JOIN Products AS pro
    ON sa.id = sa_pro.orderId;`;
    const data = await this.connection.execute(QUERY);
    const [result] = data;
    return result as Product[];
  }
}