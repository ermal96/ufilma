const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "movie",
    },
  ],
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
