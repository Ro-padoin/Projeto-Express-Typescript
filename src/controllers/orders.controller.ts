import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) { }

  public getAllOrders = async (_req: Request, res: Response) => {
    const orders = await this.ordersService.getAllOrders();
   
    res.status(StatusCodes.OK).json(orders);
  };
}