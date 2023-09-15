import { Router, Request, Response } from 'express';
import authController from '../../controllers/auth.controller';
import { tryCatchMiddleware } from '../../middleware/try-catch.middleware';
import isExist from '../../middleware/is-exist.middleware';
import User from '../../models/user.model';
import { validate } from '../../middleware/validate.middleware';
import { registerValidation } from '../../validators/auth.validator';

const router: Router = Router();

// Register user
router.post(
  '/',
  tryCatchMiddleware(isExist(User, 'email')),
  tryCatchMiddleware(validate(registerValidation)),
  tryCatchMiddleware(authController.register.bind(authController))
);


export default router;
