import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import busboy from "connect-busboy";
import formData from "express-form-data";

export const config = (app) => {
  dotenv.config();

  const port = 5000;
  app.use(cors());
  app.use(busboy());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(formData.parse());
  app.use(morgan("dev"));

  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is listening at http://127.0.0.1:${port}/`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
