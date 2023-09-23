import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/auth.service';
import UserRegistrationData from '../types/models/user-registration-data.type';

export class AuthController {
  private authService: AuthService;

  // private mailService: MailService

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async register(req: Request, res: Response, next: NextFunction) {
    const userData: UserRegistrationData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    };

    const user = await this.authService.register(userData);
    
    res.status(200).json({
      success: true,
      data: {
        user
      }
    });
  }
}

const authController = new AuthController(new AuthService);
export default authController;
