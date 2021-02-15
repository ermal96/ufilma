import mongoose from "mongoose";
import searchable from "mongoose-regex-search";
import mongoosePaginate from 'mongoose-paginate-v2';

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
movieSchema.plugin(mongoosePaginate);

export const Movie = mongoose.model("movie", movieSchema);
