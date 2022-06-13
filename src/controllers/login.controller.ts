import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public createLogin = async (req: Request, res: Response) => {
    try {
      const user = req.body;
      const token = await this.loginService.createLogin(user);  
      res.status(StatusCodes.OK).json({ token });
    } catch (error: unknown) {
      console.log(error);
      
      if (error instanceof Error) {
        res
          .status(StatusCodes.UNAUTHORIZED).json({ message: error.message });
      }
    }
  };
}