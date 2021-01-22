import { Category } from "../models/categoryModel.js";
import fs from "fs-extra";
import { __dirname } from "../index.js";

export const getAll = async (_, res) => {
  try {
    const categories = await Category.find()
      .select("-__v ")
      .sort({ _id: -1 })
      .populate("movies", "name");

    res.status(200).send({
      categories,
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const category = await Category.find({ _id: req.params.id })
      .select("-__v")
      .populate("movies", "name");

    res.status(200).send({
      category,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

export const add = async (req, res) => {
  const category = new Category(req.body);

  // get path from req.files
  const src = req.files.thumbnail.path;

  // store thumbnail dest
  const thumbnailDest = `${__dirname}/images/${req.files.thumbnail.name}`;

  // move thumbnail to dest
  fs.move(src, thumbnailDest, {
    overwrite: true,
  })
    .then(() => {})
    .catch((err) => {
      // response
      return res.status(400).send({
        message: "Thumbail upload failed",
      });
    });

  // store categories ids from req.body
  const catIds = req.body.categories;

  // asign thumbnail
  category.thumbnail = thumbnailDest;

  try {
    await category.save();
    res.status(201).send({
      message: "Category was successfully added",
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};

export const removeById = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id });

    res.send({
      message: "Category was successfully deleted",
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};

export const updateById = async (req, res) => {
  const updatedCategory = {
    ...req.body,
  };

  if (req.file) {
    updatedCategory.imageUrl = "/" + req.file.path;
  }

  try {
    await Category.findOneAndUpdate({ _id: req.params.id }, updatedCategory, {
      returnOriginal: false,
    });

    res.status(202).send({
      message: "Category was successfully updated",
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};
