import crypto from 'crypto';

// Generate a random 16-byte (128-bit) salt
export const generateRandomSalt = () => {
  return crypto.randomBytes(16).toString('hex')
};
