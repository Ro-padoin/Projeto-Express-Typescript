import { Router } from 'express';
import ProductsController from '../controllers/products.controllers';
import validateProduct from '../middlewares/dataValidationForProductCreation';

const router = Router();
const productsController = new ProductsController();

router.get('/products', productsController.getAllProducts);
router.post('/products', validateProduct, productsController.createNewProduct);

export default router;