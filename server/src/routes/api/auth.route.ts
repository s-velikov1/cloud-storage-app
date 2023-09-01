import { Router, Request, Response } from 'express';
import authController from '../../controllers/auth.controller';

const router: Router = Router();

// Register user
router.get('/', authController.register.bind(authController));


export default router;