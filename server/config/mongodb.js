import mongoose from 'mongoose';

export const  mongoConnect = () => {
  mongoose
    .connect(
      "mongodb://127.0.0.1:27017/ufilma",
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
