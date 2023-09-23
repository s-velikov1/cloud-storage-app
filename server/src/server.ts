import express from 'express';
import dotenv from 'dotenv';
import mongoConnect, { mongoDisconnect } from './config/database';

// Routers
import AppRouter from './routes';

dotenv.config();

const app = express();
const router = new AppRouter(app);

// Connect to database
mongoConnect(process.env.NODE_ENV === 'test');

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(express.json());

router.init();

const port = app.get('port');

const server = app.listen(port, () => console.log(`Server is running on port: ${port}`));

process.on('SIGINT', () => {
  server.close(() => {
    mongoDisconnect();
    process.exit(0);
  })
});

process.on('SIGTERM', () => {
  server.close(() => {
    mongoDisconnect();
    process.exit(0);
  });
});

export default app;
