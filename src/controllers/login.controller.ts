import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public createLogin = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.loginService.createLogin(user);
    console.log('controller');    
    res.status(StatusCodes.CREATED).json({ token });
  };
}