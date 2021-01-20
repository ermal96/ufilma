import mongoose from "mongoose";
// import mongoosePaginate from "mongoose-paginate-v2";
import searchable from "mongoose-regex-search";

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    searchable: true,
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

movieSchema.plugin(searchable);

export const Movie = mongoose.model("movie", movieSchema);
