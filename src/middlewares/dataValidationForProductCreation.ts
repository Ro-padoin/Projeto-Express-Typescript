import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import schemaProduct from '../schemas';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const validation = schemaProduct.validate(body);
  if (validation.error) {
    const typeError = validation.error.details[0];
    if (typeError.type === 'any.required') {
      res.status(StatusCodes.BAD_REQUEST).json({ message: typeError.message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: typeError.message });
  }
  next();
};

export default validateProduct;
