import { Request, Response, NextFunction } from 'express';

export const tryCatchMiddleware = (
  handler: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await handler(req, res, next);
  } catch (error) {
    next(error); // Pass the error to the next middleware (error handler)
  }
};