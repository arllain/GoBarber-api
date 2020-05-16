import { Router } from 'express';
import { Segments, Joi, celebrate } from 'celebrate';
import AuthenticateUserService from '../controllers/SessionsController';

const sessionsRouter = Router();
const authenticateUserService = new AuthenticateUserService();

sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  authenticateUserService.create,
);

export default sessionsRouter;
