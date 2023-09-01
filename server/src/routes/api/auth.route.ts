import { Router, Request, Response } from 'express';
import authController from '../../controllers/auth.controller';
import { tryCatchMiddleware } from '../../middleware/try-catch.middleware';
import isExist from '../../middleware/is-exist.middleware';
import User from '../../models/user.model';

const router: Router = Router();

// Register user
router.post(
  '/',
  tryCatchMiddleware(isExist(User, 'email')),
  tryCatchMiddleware(authController.register.bind(authController))
);


export default router;
