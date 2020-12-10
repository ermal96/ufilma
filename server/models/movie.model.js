import mongoose from  "mongoose";

const movieSchema = mongoose.Schema({
  name: String,
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

