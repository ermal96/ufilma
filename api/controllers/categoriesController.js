import { Category } from "../models/categoryModel.js";
import { generateImagePath, upload } from "../utils/upload.js";

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

  // get images path from req
  const thumbnailSrc = req.files.thumbnail.path;

  // store images dest
  const thumbnailDest = req.files.thumbnail.name;

  // upload images
  upload(thumbnailSrc, thumbnailDest, res);

  // asign thumbnail
  category.thumbnail = generateImagePath(thumbnailDest);

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
  // copy req.body to updatedCategory const
  const updatedCategory = {
    name: req.body.name,
    description: req.body.description,
  };

  if (req.files.thumbnail) {
    // get images path from req
    const thumbnailSrc = req.files.thumbnail.path;

    // store images dest
    const thumbnailDest = req.files.thumbnail.name;

    // upload images
    upload(thumbnailSrc, thumbnailDest, res);

    // asign thumbnail
    updatedCategory.thumbnail = generateImagePath(thumbnailDest);
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
