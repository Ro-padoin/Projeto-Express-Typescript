import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';

interface UserInfoRequest extends Request {
  userInfo: string | JwtPayload | undefined
}

dotenv.config();

const secretKey = process.env.JWT_SECRET;

const validateAuth = (req: UserInfoRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
    
  if (!token || !secretKey) {
    return res
      .status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not Found' });
  }

  jwt.verify(token, secretKey, (error, userInfo) => {
    if (error) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Invalid token' });
    req.userInfo = userInfo;
  });    
  next();
};

export default validateAuth;
