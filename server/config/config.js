const config = (app) => {
  require("dotenv").config();
  const bodyParser = require("body-parser");
  const port = 5000;
  const cors = require("cors");

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  app.listen(port, () => {
    console.log(`Server is listening at http://127.0.0.1:${port}/`);
  });
};

module.exports = config;
