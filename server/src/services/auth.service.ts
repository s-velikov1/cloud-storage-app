import User from '../models/user.model';
import ApiError from '../exceptions/api.error';
import UserRegistrationData from '../types/models/user-registration-data.type';
import bcrypt from 'bcrypt';

export default class AuthService {
  async register(data: UserRegistrationData) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const user = await new User({
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      email: data.email,
      password: hashedPassword
    });

    await user.save();

    return user;
  }
}
