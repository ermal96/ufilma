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
    const user = await User.findOneAndUpdate(
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
    const user = await User.findOneAndUpdate(
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

export const addWatching = async (req, res) => {
  try {
    const exists = await User.findOne({ _id: req.body.userId }, { watching: { $elemMatch: { _id: req.body._id } } });

    if (exists.watching.length) {
      exists.watching[0].played = req.body.played;

      console.log(exists.watching[0]);

      exists.save();
    } else {
      await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { watching: req.body } },
        {
          useFindAndModify: false,
          returnOriginal: false,
        }
      );
    }

    const user = await User.findOne({ _id: req.body.userId });

    return res.status(200).send({
      watching: user.watching,
    });
  } catch (error) {
    return res.send({
      message: "Something went wrong",
    });
  }
};

export const getWatching = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });

    res.status(200).send({
      watching: user.watching,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};
