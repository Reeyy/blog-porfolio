import mongoose from 'mongoose';

const URL = process.env.MONGODB_URL as string;

const mongooseConnect = async () => {
  try {
    const connect = await mongoose.connect(URL);
    return connect;
  } catch (error) {
    console.log('failed: ', error);
  }
};
export default mongooseConnect;
