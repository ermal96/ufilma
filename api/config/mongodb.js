import mongoose from 'mongoose';

export const  mongoConnect = () => {
  mongoose
    .connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};
