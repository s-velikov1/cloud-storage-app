import mongoose from 'mongoose';

const mongoConnect = async (testing: boolean = false) => {
  try {
    const uri = testing ? process.env.MONGO_URI_TEST : process.env.MONGO_URI
    await mongoose.connect(uri || '');
    console.log('MonoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed: ', error);
  }
}

export const mongoDisconnect = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error('Can not close mongo connection: ', error);
  }
}

export const dropTestingDb = async () => {
  try {
    await mongoose.connection.db.dropDatabase();
  } catch (error) {
    console.error('Error dropping testing database: ', error);
  } finally {
    await mongoose.disconnect();
  }
}

export default mongoConnect
