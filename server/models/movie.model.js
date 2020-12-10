import mongoose from  "mongoose";
import slug  from "mongoose-slug-generator";

mongoose.plugin(slug);

const movieSchema = mongoose.Schema({
  name: String,
  slug: { type: String, slug: "name" },
  description: String,
  quality: String,
  year: Number,
  trailerUrl: String,
  time: Number,
  videoUrl: String,
  imageUrl: String,
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
});

export const Movie = mongoose.model("movie", movieSchema);

