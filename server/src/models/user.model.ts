import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  firstName: {
    type: String,
    max: 100,
    default: ''
  },
  lastName: {
    type: String,
    max: 100,
    default: ''
  },
  email: {
    type: String,
    max: 255,
    required: true
  },
  password: {
    type: String,
    min: 6,
    max: 32,
    require: true
  },
  spaceLimit: {
    type: Number,
    default: 1024 ** 3 // 1GB of default space for a user
  },
  usedSpace: {
    type: Number,
    default: 0
  }
});

const User = model('User', userSchema);
export default User;
