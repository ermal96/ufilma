import bcrypt from "bcryptjs";
import { User } from "../models/userModel.js";
import { genToken } from "../auth/genToken.js";

export const register = async (req, res) => {
  const user = new User(req.body);
  const passReg = new RegExp("^((?=.*[a-z])(?=.*[0-9])(?=.{6,}))");
  const emailReg = new RegExp("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$");

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  user.password = hashedPassword;

  try {
    const userExist = await User.findOne({ email: req.body.email });

    if (userExist) {
      return res.status(409).send({ message: "Email ësht i zënë nga dikush tjeter" });
    } else {
      if (!emailReg.test(req.body.email)) {
        return res.status(400).send({
          message: "Email nuk eshte i sakte",
        });
      }

      if (!passReg.test(req.body.password)) {
        return res.status(400).send({
          message: "Fjalkalimi duhet te permbaj te pakten 6 karaktere dhe nje numer ",
        });
      }

      const hasUsers = await User.find();

      if (!hasUsers.length) {
        user.role = "ADMIN";
      } else {
        user.role = "USER";
      }

      await user.save();

      const token = await genToken({ id: user._id });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
      };

      return res.status(201).send({ token, user: userData });
    }
  } catch (error) {
    return res.status(400).send({ message: "Dicka shkoi keq ju lutem provoni me vonë" });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).send({ message: "Email nuk egziston" });
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (result) {
      const token = await genToken({ id: user._id });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
        favorites: user.favorites,
        watching: user.watching,
      };

      return res.status(200).send({ token, user: userData });
    } else {
      return res.status(400).send({ message: "Fjalëkalimi është i gabuar" });
    }
  } catch (error) {
    return res.status(400).send({ message: "Dicka shkoi keq ju lutem provoni me vonë" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).send({ message: "Email nuk egziston" });
    }

    if (user.role !== "ADMIN") {
      return res.status(400).send({ message: "Ju nuk keni aksess te aksesoni kte faqe" });
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (result) {
      const token = await genToken({ id: user._id });

      const userData = {
        id: user._id,
        name: user.name,
        email: user.email,
      };

      return res.status(200).send({ token, user: userData });
    } else {
      return res.status(400).send({ message: "Fjalëkalimi është i gabuar" });
    }
  } catch (error) {
    return res.status(400).send({ message: "Dicka shkoi keq ju lutem provoni me vonë" });
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
      watching: user.watching,
    };

    return res.status(200).send({ token, user: userData });
  } catch (error) {
    return res.status(400).send({ message: "Dicka shkoi keq ju lutem provoni me vonë" });
  }
};
