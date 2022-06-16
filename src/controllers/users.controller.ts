import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

class UsersController {
  constructor(private usersService = new UsersService()) { }

  public createNewUser = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.usersService.createNewUser(user);
    res.status(StatusCodes.CREATED).json({ token });
  };
}

export default new UsersController();