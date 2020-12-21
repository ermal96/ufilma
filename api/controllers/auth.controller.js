import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { genToken } from "../auth/genToken.js";

export const register = async (req, res) => {
  const user = new User(req.body);

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  user.password = hashedPassword;

  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      res.status(409).send({ message: "Email has been taken" });
    } else {
      await user.save();

      const token = await genToken({ id: user._id });

      const userData = {
        name: user.name,
        email: user.email,
        id: user._id,
      };

      res.status(201).send({ token, user: userData });
    }
  } catch (error) {
    res.status(400).send({ message: "Sorry something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res
        .status(400)
        .send({ message: "sorry this email does not exist" });
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (result) {
      const token = await genToken({ id: user._id });

      const userData = {
        name: user.name,
        email: user.email,
        id: user._id,
      };

      return res.status(200).send({ token, user: userData });
    } else {
      return res.status(400).send({ message: "Sorry password is wrong" });
    }
  } catch (error) {
    return res.status(400).send({ message: "Sorry something went wrong" });
  }
};

export const autoLogin = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findOne({ _id: userId });

    const token = await genToken({ id: userId });

    const userData = {
      name: user.name,
      email: user.email,
      id: userId,
    };

    return res.status(200).send({ token, user: userData });
  } catch (error) {
    res.status(400).send({ message: "Sorry something went wrong" });
  }
};
