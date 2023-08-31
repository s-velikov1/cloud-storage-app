import { Router } from 'express';

const router: Router = Router();

router.get('/', (req, res) => {
  res.json('user get route')
});

export default router;
