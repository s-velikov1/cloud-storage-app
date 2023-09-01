import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

export class AuthController {
  private authService: AuthService;

  // private mailService: MailService

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async register(req: Request, res: Response) {
    const message: string = await this.authService.register(req.body);
    res.status(200).json({
      message: `message from auth controller + ${message}`
    });
  }
}

const authController = new AuthController(new AuthService);
export default authController;
