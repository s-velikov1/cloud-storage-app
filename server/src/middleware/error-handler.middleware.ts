import { Request, Response, NextFunction } from "express"
import ApiError from "../exceptions/api.error";
import { ValidationError } from "express-validator";

interface ErrorResponseObj {
  message: string;
  errors?: ValidationError[];
  stack?: string
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const isDevelopmentInstance = process.env.NODE_ENV === 'development';
  if (isDevelopmentInstance) {
    console.error(err);
  }

  if (err instanceof ApiError) {
    const responseObj: ErrorResponseObj = {
      message: err.message,
      errors: err.errors,
    };

    if (isDevelopmentInstance) {
      responseObj.stack = err.stack;
    }
    return res.status(err.statusCode).json(responseObj);
  }

  const responseObj: ErrorResponseObj = {
    message: err.message
  };

  if (isDevelopmentInstance) {
    responseObj.stack = err.stack
  }

  return res.status(500).json(responseObj);
}
