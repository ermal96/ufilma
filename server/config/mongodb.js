const mongoose = require("mongoose");

module.exports = mongoConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://ufilma:ufilma2020.@ufilma.ghjph.mongodb.net/ufilma?retryWrites=true&w=majority",
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
