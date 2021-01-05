import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const movieSchema = mongoose.Schema({
  name: {
    type: String,
  },
  slug: String,
  description: String,
  quality: String,
  year: Number,
  ratio: String,
  trailerUrl: {
    type: String,
  },
  time: {
    type: Number,
  },
  videoUrl: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
  ],
});

movieSchema.plugin(mongoosePaginate);

export const Movie = mongoose.model("movie", movieSchema);
