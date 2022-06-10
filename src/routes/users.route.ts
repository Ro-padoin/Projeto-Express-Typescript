import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import isValid from '../middlewares/validations';

const router = Router();
const usersController = new UsersController();

router.post('/users', isValid.validateUser, usersController.createNewUser);

export default router;