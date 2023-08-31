import express from 'express';
import AppRouter from '../routes';

const app = express();
const router = new AppRouter(app);

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

export default server;
