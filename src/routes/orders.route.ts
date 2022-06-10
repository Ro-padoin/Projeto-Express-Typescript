import { Router } from 'express';
import OrdersCrontroller from '../controllers/orders.controller';

const router = Router();
const ordersController = new OrdersCrontroller();

router.get('/orders', ordersController.getAllOrders);

export default router;