import mongoose from "mongoose";
import searchable from "mongoose-regex-search";

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    searchable: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quality: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  ratio: {
    type: String,
  },
  trailerUrl: {
    type: String,
  },
  time: {
    type: Number,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  cover: {
    type: String,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
  ],
});

movieSchema.plugin(searchable);

export const Movie = mongoose.model("movie", movieSchema);
