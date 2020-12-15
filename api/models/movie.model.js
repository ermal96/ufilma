import mongoose from  "mongoose";

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: String,
  description: String,
  quality: String,
  year: Number,
  trailerUrl: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
});

export const Movie = mongoose.model("movie", movieSchema);

