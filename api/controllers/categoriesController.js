import { Category } from "../models/categoryModel.js";
import { generateImagePath, upload } from "../utils/upload.js";

export const getAll = async (_, res) => {
  try {
    const categories = await Category.find()
      .select("-__v ")
      .sort({ _id: -1 })
      .populate("movies", "name");

    return res.status(200).send({
      categories,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const category = await Category.find({ _id: req.params.id })
      .select("-__v")
      .populate("movies", "name");

    return res.status(200).send({
      category,
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const add = async (req, res) => {
  const category = new Category(req.body);

  // get images path from req
  const thumbnailSrc = req.files.thumbnail.path;
  const coverSrc = req.files.cover.path;

  // store images dest
  const thumbnailDest = req.files.thumbnail.name;
  const coverDest = req.files.cover.name;

  // upload images
  upload(thumbnailSrc, thumbnailDest, res);
  upload(coverSrc, coverDest, res);

  // asign thumbnail
  category.thumbnail = generateImagePath(thumbnailDest);
  category.cover = generateImagePath(coverDest);

  try {
    await category.save();
    return res.status(201).send({
      message: "Kategoria u krijua me sukses",
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const removeById = async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.params.id });

    return res.status(200).send({
      message: "Kategoria u fshi me sukses",
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
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

  if (req.files.cover) {
    // get images path from req
    const coverSrc = req.files.cover.path;

    // store images dest
    const coverDest = req.files.cover.name;

    // upload images
    upload(coverSrc, coverDest, res);

    // asign cover
    updatedCategory.cover = generateImagePath(coverDest);
  }

  try {
    await Category.findOneAndUpdate({ _id: req.params.id }, updatedCategory, {
      returnOriginal: false,
    });

    return res.status(202).send({
      message: "Kategoria u modifikua me sukses",
    });
  } catch (error) {
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};
