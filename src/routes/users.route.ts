import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import isValid from '../middlewares/validations';

const router = Router();

router.post('/users', isValid.validateUser, UsersController.createNewUser);

export default router;