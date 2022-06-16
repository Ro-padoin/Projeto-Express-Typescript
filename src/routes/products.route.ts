import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import isValid from '../middlewares/validations';

const router = Router();

router.get('/products', ProductsController.getAllProducts);
router.post('/products', isValid.validateProduct, ProductsController.createNewProduct);

export default router;