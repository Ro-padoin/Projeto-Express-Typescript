import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import valid from '../schemas';

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = valid.schemaProduct.validate(body);
  if (result.error) {
    const typeError = result.error.details[0];
    if (typeError.type === 'any.required') {
      res.status(StatusCodes.BAD_REQUEST).json({ message: typeError.message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: typeError.message });
  }
  next();
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = valid.schemaUser.validate(body);
  if (result.error) {
    const typeError = result.error.details[0];
    if (typeError.type === 'any.required') {
      res.status(StatusCodes.BAD_REQUEST).json({ message: typeError.message });
    }
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: typeError.message });
  }
  next();
};

export default { validateProduct, validateUser };
