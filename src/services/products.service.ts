import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import { Product, Description } from '../interface/product.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.model.getAllProducts();
    return products;
  }

  public async createNewProduct(product: Description): Promise<Description> {
    return this.model.createNewProduct(product);
  }
}