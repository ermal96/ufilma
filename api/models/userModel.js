import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "movie",
    },
  ],
  watching: [
    {
      _id: String,
      played: String,
    },
  ],
});

export const User = mongoose.model("user", userSchema);
