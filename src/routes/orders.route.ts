import { Router } from 'express';
import OrdersCrontroller from '../controllers/orders.controller';
import validateAuth from '../middlewares/auth';
import isValid from '../middlewares/validations';

const router = Router();

router.get('/orders', OrdersCrontroller.getAllOrders);

// router.use(validateAuth); // apartir daqui todas as rotas necessitarão de autenticação, podemos tabem incluir  diretamente nas rotas;

router.post('/orders', validateAuth, isValid.validateOrders, OrdersCrontroller.createOrder);

export default router;