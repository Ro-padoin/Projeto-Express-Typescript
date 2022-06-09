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
    const insertProduct = await this.connection.execute<ResultSetHeader>(QUERY, [name, amount]);
    const [valuesInserted] = insertProduct;
    const { insertId } = valuesInserted;
    return { id: insertId, ...product };
  }
}