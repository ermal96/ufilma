import mongoose from "mongoose";
// import mongoosePaginate from "mongoose-paginate-v2";
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
  imageUrl: {
    type: String,
    required: true,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
});

movieSchema.plugin(searchable);

export const Movie = mongoose.model("movie", movieSchema);
