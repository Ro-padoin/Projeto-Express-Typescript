import { Pool } from 'mysql2/promise';
import { Product } from '../interface/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Product[]> {
    const QUERY = 'SELECT * FROM Trybesmith.Products;';
    const data = await this.connection.execute(QUERY);
    const [result] = data;
    return result as Product[];
  }
}