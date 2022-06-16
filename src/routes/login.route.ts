import { Router } from 'express';
import LoginCrontroller from '../controllers/login.controller';
import isValid from '../middlewares/validations';

const router = Router();

router.post('/login', isValid.validateLogin, LoginCrontroller.createLogin);

export default router;