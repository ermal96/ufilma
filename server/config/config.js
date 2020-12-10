import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

export const config = (app) => {
  dotenv.config();

  const port = 5000;

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.listen(port, () => {
    console.log(`Server is listening at http://127.0.0.1:${port}/`);
  });
};
