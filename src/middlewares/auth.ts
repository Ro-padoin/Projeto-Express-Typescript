import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';

dotenv.config();

const secretKey = process.env.JWT_SECRET 
  || 'un-Y&RyAHU-G_jN4Dzp%ydTJLdMzr8MwZSjG*JWM+bD6!y%62?8pKwUdh_hZ&GCNUs5DS?W+9r';

type TokenPayload = {
  id: string
  username: string
};

const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
    
  if (!token || !secretKey) {
    return res
      .status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const data = jwt.verify(token, secretKey);
    req.userInfo = data as unknown as TokenPayload;
    
    next();
  } catch {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
};

export default validateAuth;

// const secretKey = process.env.JWT_SECRET;

// interface UserPayload {
//   id: number
//   username: string
// }

// interface UserInfo extends Request {
//   userInfo: {
//     id: number
//     username: string
//   }
// }

// const validateAuth = (req: UserInfo, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;
    
//   if (!token || !secretKey) {
//     return res
//       .status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not Found' });
//   }

//   jwt.verify(token, secretKey, (error: unknown, user) => {
//     if (error) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
//     req.userInfo = user as unknown as UserPayload;
//   });
//   next();  
// }

// try {
//   const data = jwt.verify(token, secretKey);      
//   req.userInfo = data as TokenPayload;
    
//   next();
// } catch {
//   return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
// }