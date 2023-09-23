import { Application } from 'express';
import userRouter from '../routes/api/user.route';
import authRouter from '../routes/api/auth.route'
import { errorHandler } from '../middleware/error-handler.middleware';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/user', userRouter);
    this.app.use('/api/auth', authRouter);

    this.app.use(errorHandler); // This middleware should be the last one.
  }
}

export default AppRouter;
