import Joi from 'joi';
import { Description } from '../interface/product.interface';
import User from '../interface/user.interface';
import Login from '../interface/login.interface';

const schemaProduct = Joi.object<Description>({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

const schemaUser = Joi.object<User>({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

const schemaLogin = Joi.object<Login>({
  username: Joi.required(),
  password: Joi.required(),
});

export default { schemaProduct, schemaUser, schemaLogin };