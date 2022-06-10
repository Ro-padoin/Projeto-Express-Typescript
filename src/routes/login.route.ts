import { Router } from 'express';
import LoginCrontroller from '../controllers/login.controller';
import isValid from '../middlewares/validations';

const router = Router();
const loginCrontroller = new LoginCrontroller();

router.post('/login', isValid.validateLogin, loginCrontroller.createLogin);

export default router;