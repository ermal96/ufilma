const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  movie: mongoose.Schema.Types.ObjectId,
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;
