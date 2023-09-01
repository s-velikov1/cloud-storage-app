import { Application } from 'express';
import userRouter from '../routes/api/user.route';
import authRouter from '../routes/api/auth.route'

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get('/', (req, res) => {
      res.send('API Running');
    });
    this.app.use('/api/user', userRouter);
    this.app.use('/api/auth', authRouter);
  }
}

export default AppRouter;