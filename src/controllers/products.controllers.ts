import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) { }

  public getAllProducts = async (_req: Request, res: Response) => {
    const products = await this.productsService.getAllProducts();
    res.status(StatusCodes.OK).json(products);
  };

  public createNewProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.productsService.createNewProduct(product);
    res.status(StatusCodes.CREATED).json(productCreated);
  };
}