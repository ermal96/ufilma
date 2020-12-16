import { Movie } from "../models/movie.model.js";
import { Category } from "../models/category.model.js";
import { slugify } from "../utils/slugify.js";
import { validateMovie } from "../validation/movie.validation.js";

export const getAll = async (_, res) => {
  try {
    const movies = await Movie.find()
      .select("name year imageUrl slug")
      .populate("categories", "name");

    res.status(200).send({
      movies,
    });
  } catch (error) {
    res.status(400).send({
      message: "Sorry something went wrong",
    });
  }
};

export const getById = async (req, res) => {
  try {
    const movie = await Movie.find({ _id: req.params.id })
      .select("-__v")
      .populate("categories", "name");

    res.status(200).send({
      movie,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

export const add = async (req, res) => {
  const movie = new Movie(req.body);

  movie.slug = slugify(req.body.name);
  // movie.imageUrl = "/" + req.file.path;

  const hasError = await validateMovie(req.body);

  if (hasError.length) {
    res.status(400).send({
      message: hasError.error.details[0].message,
    });
  }

  const catIds = req.body.categories;

  try {
    await movie.save();
    await Category.find({ _id: catIds }).updateMany({ movies: movie });

    res.status(201).send({
      message: "Movie was successfully added",
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};

export const removeById = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.id });

    res.status(202).send({
      message: "Movie was successfully deleted",
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};

export const updateById = async (req, res) => {
  const catIds = req.body.categories;

  try {
    await Movie.updateOne(req.body);
    await Category.find({ _id: catIds }).updateMany({
      movies: new Movie(req.body),
    });
    res.status(202).send({
      message: "Movie was successfully updated",
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};
