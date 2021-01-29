import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";
import { genToken } from "../auth/genToken.js";
import { validateUser } from "../validation/userValidation.js";

export const register = async (req, res) => {
  const user = new User(req.body);

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  user.password = hashedPassword;

  const hasError = await validateUser(req.body);

  if (hasError.length && hasError) {
    return res.status(400).send({
      message: hasError.error.details[0].message,
    });
  }

  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      res.status(409).send({ message: "Email has been taken" });
    } else {
      const hasUsers = await User.find();

      if (!hasUsers.length) {
        user.role = "ADMIN";
      } else {
        user.role = "USER";
      }

      await user.save();

      const token = genToken({ id: user._id });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
      };

      return res.status(201).send({ token, user: userData });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Sorry something went wrong try it latter" });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res
        .status(400)
        .send({ message: "Sorry this email does not exist" });
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (result) {
      const token = await genToken({ id: user._id });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
      };

      return res.status(200).send({ token, user: userData });
    } else {
      return res.status(400).send({ message: "Sorry password is wrong" });
    }
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Sorry something went wrong try it latter" });
  }
};

export const autoLogin = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findOne({ _id: userId });

    const token = await genToken({ id: userId });

    const userData = {
      id: userId,
      name: user.name,
      email: user.email,
      favorites: user.favorites,
    };

    return res.status(200).send({ token, user: userData });
  } catch (error) {
    res
      .status(400)
      .send({ message: "Sorry something went wrong try it latter" });
  }
};
