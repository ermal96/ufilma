import  { Category }  from "../models/category.model.js";
import { slugify } from '../utils/slugify.js';

export const get = async (_, res) => {
  try {
    const categories = await Category.find()
      .select("-__v ")
      .populate("movies", "name");

    res.send({
      data: categories,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

export const add = async (req, res) => {
  const category = await new Category(req.body);

  movie.slug = slugify(req.body.name);
  
  try {
    await category.save();
    res.send({
      message: "Category was successfully added",
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

export const remove = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.slug });

    res.send({
      message: `Category was successfully deleted`,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

export const update = async (req, res) => {
  try {
    await Category.update(req.body);

    res.send({
      message: `Category was successfully updated`,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};
