import mongoose from 'mongoose';

export default class MongoHelper {
  static connect = (url) => mongoose.connect(url);
}
