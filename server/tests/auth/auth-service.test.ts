// import AuthService from '../../src/services/auth.service';
// import bcrypt, { genSalt } from 'bcrypt';
// import { jest } from '@jest/globals';
// // import User from '../../src/models/user.model';

// jest.mock('bcrypt', () => ({
//   genSalt: jest.fn<() => Promise<string>>().mockResolvedValueOnce('mockSalt'),
//   hash: jest.fn<() => Promise<string>>().mockResolvedValueOnce('mockedHash')
// }));

// jest.mock('../../src/models/user.model.ts', () => ({
//   create: jest.fn()
// }));

// describe('AuthService', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should register a user', async () => {
//     const authService = new AuthService();

//     const generatedId = '123abc';
//     const mockedUser = {
//       _id: generatedId,
//       email: 'stas+1@gmail.com',
//       password: '123456'
//     };
//     (User.create as jest.Mock).mockRejectedValue(mockedUser)
//   })
// })


// Temporary plug test
import sum from '../../src/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});