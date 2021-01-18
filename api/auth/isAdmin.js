import { User } from "../models/user.model.js";

export const isAdmin = async (req, res, next) => {
  const userId = req.user.id;

  const user = await User.findOne({ _id: userId });

  if (user.role === "ADMIN") {
    next();
  } else {
    return;
  }
};
