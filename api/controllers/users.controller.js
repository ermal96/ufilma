import { User } from "../models/user.model.js";

export const getAll = async (_, res) => {
  try {
    const users = await User.find().select("-password -__v").sort({ _id: -1 });
    res.status(200).send({
      users,
    });
  } catch (error) {
    res.status(400).send({
      message: "Sorry something went wrong",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });

    res.status(200).send({
      user,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};
