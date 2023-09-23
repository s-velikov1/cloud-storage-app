import { Request, Response, NextFunction } from 'express';
import { model } from 'mongoose';
import ApiError from '../exceptions/api.error';

const isExist = (model: any, propertyName: any) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataToCheck = req.body[propertyName];

  const result = await model.findOne({ [propertyName]: dataToCheck });
  

  if (!result) {
    next();
  } else {
    throw ApiError.BadRequest('Resource already exist');
  }
}

export default isExist;

