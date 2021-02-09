import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const getAll = async (_, res) => {
  try {
    const users = await User.find().select("-password -__v").sort({ _id: -1 });
    res.status(200).send({
      users,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Sorry something went wrong",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });

    return res.status(200).send({
      user,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const editAccount = async (req, res) => {
  const passReg = new RegExp("^((?=.*[a-z])(?=.*[0-9])(?=.{6,}))");
  const emailReg = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");

  try {
    const user = await User.findOne({ _id: req.body.id });
    const userExist = await User.findOne({ email: req.body.email });

    const isCurrentPass = await bcrypt.compare(req.body.currentPassword, user.password);

    if (req.body.name) {
      user.name = req.body.name;
    }

    if (user.email !== req.body.email) {
      if (userExist) {
        return res.status(409).send({ message: "Email ësht i zënë nga dikush tjetër" });
      } else {
        if (req.body.email) {
          user.email = req.body.email;
        }
      }
    }

    if (isCurrentPass) {
      if (req.body.password) {
        if (!passReg.test(req.body.password)) {
          return res.status(403).send({
            message: "Fjalekalimi i ri duhet te permbaje 6 karaktere dhe 1 numer",
          });
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        user.password = hashedPassword;
      }
    } else {
      return res.status(403).send({ message: "Fjalekalimi aktual eshte jo korrekt!" });
    }

    await user.save();

    return res.status(201).send({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    return res.status(400).send({ message: "Dicka shkoi keq ju lutem provoni me vonë" });
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
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
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
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
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
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
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
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};
