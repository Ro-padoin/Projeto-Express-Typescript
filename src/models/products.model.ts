import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, Description } from '../interface/product.interface';

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

  public async createNewProduct(product: Description): Promise<Description> {
    const { name, amount } = product;
    const QUERY = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);';
    const [insertProduct] = await this.connection.execute<ResultSetHeader>(QUERY, [name, amount]);
    const { insertId } = insertProduct;
    return { id: insertId, ...product };
  }

  public async getProductsFromOrder(orderId: number): Promise<Product[]> {
    const QUERY = 'SELECT * FROM Trybesmith.Products WHERE orderId = ?;';
    const [data] = await this.connection.execute(QUERY, [orderId]);
    return data as Product[];
  }
}