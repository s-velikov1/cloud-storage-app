import mongoose from 'mongoose';

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MonoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed: ', error);
  }
}

export default mongoConnect
