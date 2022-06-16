import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interface/user.interface';

dotenv.config();

const secretKey: string | undefined = process.env.JWT_SECRET || 'muitSecreta';

const generateToken = (payload: User) => jwt.sign(payload, secretKey);

export default generateToken;
