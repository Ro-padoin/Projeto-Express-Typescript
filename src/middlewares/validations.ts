import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import valid from '../schemas';

const createReturnError = (t: string, m: string, res: Response) => {
  if (t === 'any.required') {
    res.status(StatusCodes.BAD_REQUEST).json({ message: m });
  }
  return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: m });
};

const validateProduct = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = valid.schemaProduct.validate(body);
  if (result.error) {
    const { type, message } = result.error.details[0];
    return createReturnError(type, message, res);
  }
  next();
};

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = valid.schemaUser.validate(body);
  if (result.error) {
    const { type, message } = result.error.details[0];
    return createReturnError(type, message, res);
  }
  next();
};

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const result = valid.schemaLogin.validate(body);
  if (result.error) {
    const { type, message } = result.error.details[0];
    return createReturnError(type, message, res);
  }
  next();
};

export default { validateProduct, validateUser, validateLogin };
