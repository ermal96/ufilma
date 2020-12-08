const config = (app) => {
  require("dotenv").config();
  const bodyParser = require("body-parser");
  const port = process.env.PORT || 5000;
  const cors = require("cors");

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());

  // app.use((req, res, next) => {
  //   const apiKey = req.get("key");

  //   if (apiKey !== process.env.API_KEY) {
  //     res.status(401).json({ message: "unauthorised" });
  //   } else {
  //     next();
  //   }
  // });

  app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
  });
};

module.exports = config;
