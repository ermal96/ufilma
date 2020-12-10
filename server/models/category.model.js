import mongoose from  "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "movie",
    },
  ],
});

export const Category = mongoose.model("category", categorySchema);

