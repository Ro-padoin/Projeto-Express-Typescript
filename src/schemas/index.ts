import Joi from 'joi';
import { Description } from '../interface/product.interface';

const schemaProduct = Joi.object<Description>({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default schemaProduct;