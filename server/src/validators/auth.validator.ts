import { body } from 'express-validator';

export const registerValidation = [
  body('firstName')
    .optional()
    .isString().withMessage('First name should be a string')
    .isLength({ max: 32 }).withMessage('First name can not be longer than 32 characters'),
  body('lastName')
    .optional()
    .isString().withMessage('Last name should be a string')
    .isLength({ max: 32 }).withMessage('Last name can not be longer than 32 characters'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password can not be less than 6 characters'),
  body('confirmPassword')
    .isLength({ min: 6 })
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords must match');
      }

      return true;
    })
];
