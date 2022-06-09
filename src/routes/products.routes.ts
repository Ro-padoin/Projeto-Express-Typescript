import { Router } from 'express';
import ProductsController from '../controllers/products.controllers';

const router = Router();
const productsController = new ProductsController();

router.get('/products', productsController.getAllProducts);

export default router;