import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";

export const config = (app) => {
  dotenv.config();

  const port = 5000;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
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

export const __dirname = path.resolve(
  path.dirname(decodeURI(new URL(import.meta.url).pathname))
);
