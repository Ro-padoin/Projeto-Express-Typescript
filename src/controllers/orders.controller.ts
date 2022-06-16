import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';

class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAllOrders();
   
    res.status(StatusCodes.OK).json(orders);
  };

  public createOrder = async (req: Request, res: Response) => {
    const { userInfo, body } = req;
    const orders = await this.ordersService.createOrder(body, userInfo);
    return res.status(StatusCodes.CREATED).json(orders);
  };
}

export default new OrdersController();