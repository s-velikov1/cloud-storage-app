import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json('auth get route')
});

// Register user
router.post('/register', (req: Request, res: Response) => {
  
})

export default router;