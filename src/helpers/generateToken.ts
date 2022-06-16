import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interface/user.interface';

dotenv.config();

const secretKey: string | undefined = process.env.JWT_SECRET 
    || 'un-Y&RyAHU-G_jN4Dzp%ydTJLdMzr8MwZSjG*JWM+bD6!y%62?8pKwUdh_hZ&GCNUs5DS?W+9r';

const generateToken = (payload: User) => jwt.sign(payload, secretKey);

export default generateToken;
