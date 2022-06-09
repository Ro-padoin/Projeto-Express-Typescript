import { Router } from 'express';
import ProductsController from '../controllers/products.controllers';
import isValid from '../middlewares/validations';

const router = Router();
const productsController = new ProductsController();

router.get('/products', productsController.getAllProducts);
router.post('/products', isValid.validateProduct, productsController.createNewProduct);

export default router;