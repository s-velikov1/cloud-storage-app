import express from 'express';
import dotenv from 'dotenv';
import mongoConnect from './config/database';

// Routers
import AppRouter from './routes';

dotenv.config();

async function startServer(): Promise<express.Express> {
  const app = express();
  const router = new AppRouter(app);

  // Connect to database
  await mongoConnect();
  
  // Express configuration
  app.set('port', process.env.PORT || 3000);
  app.use(express.json());
  
  router.init();
  
  const port = app.get('port');
  
  const server = app.listen(port, () => console.log(`Server is running on port: ${port}`));
  
  process.on('SIGINT', () => {
    server.close(() => {
      process.exit(0);
    })
  });
  
  process.on('SIGTERM', () => {
    server.close(() => {
      process.exit(0);
    });
  });

  return app;
}

const app = startServer();


export default app;
