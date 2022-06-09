import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAlOrders() {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}