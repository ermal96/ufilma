import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const genToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
};
