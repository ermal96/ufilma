const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const movieSchema = mongoose.Schema({
  name: String,
  slug: { type: String, slug: "name" },
  description: String,
  quality: String,
  year: String,
  trailer: String,
  time: String,
  videoUrl: String,
  imageUrl: String,
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
