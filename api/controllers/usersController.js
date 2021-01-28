import { User } from "../models/userModel.js";

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

export const addFavorite = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      { $addToSet: { favorites: req.body.movieId } },
      {
        useFindAndModify: false,
        returnOriginal: false,
      }
    );

    return res.status(200).send({
      user,
    });
  } catch (error) {
    return res.send({
      message: "Something went wrong",
    });
  }
};

export const removeFavorite = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.body.userId },
      { $pull: { favorites: req.body.movieId } },
      {
        useFindAndModify: false,
        returnOriginal: false,
      }
    );
    return res.status(200).send({
      user,
    });
  } catch (error) {
    return res.send({
      message: "Something went wrong",
    });
  }
};
