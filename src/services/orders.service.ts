import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import OrdersModel from '../models/orders.model';
import { Orders } from '../interface/order.interface';

export default class OrdersService {
  public model: [OrdersModel, ProductsModel];

  constructor() {
    this.model = [new OrdersModel(connection), new ProductsModel(connection)];
  }

  public async getAllOrders() {
    const orders = await this.model[0].getAllOrders();

    const productsIds = await Promise
      .all(orders.map(async (order: Orders) => {
        const productsFromOrderId = await this.model[1].getProductsFromOrder(order.id);
        const idProducts = productsFromOrderId.map((product) => product.id);
        const result = {
          id: order.id,
          userId: order.userId,
          productsIds: idProducts,
        };
        return result;
      }));

    return productsIds;
  }
}