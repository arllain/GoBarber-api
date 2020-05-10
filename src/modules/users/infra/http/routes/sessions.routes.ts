import { Router } from 'express';
import AuthenticateUserService from '../controllers/SessionsController';

const sessionsRouter = Router();
const authenticateUserService = new AuthenticateUserService();

sessionsRouter.post('/', authenticateUserService.create);

export default sessionsRouter;
