import { Movie } from "../models/movieModel.js";
import { Category } from "../models/categoryModel.js";
import fs from "fs-extra";
import { __dirname } from "../index.js";

export const getAll = async (_, res) => {
  try {
    // get movies from db
    const movies = await Movie.find()
      .select("name year imageUrl slug description quality trailerUrl")
      .populate("categories", "name")
      .sort({ _id: -1 })
      .limit(30);

    // send movies
    return res.status(200).send({
      movies,
    });
  } catch (error) {
    // send error
    res.status(400).send({
      message: "Sorry something went wrong",
    });
  }
};

export const getById = async (req, res) => {
  try {
    // get movie from db
    const movie = await Movie.find({ _id: req.params.id })
      .select("-__v")
      .populate("categories", "name");

    // send movie
    return res.status(200).send({
      movie,
    });
  } catch (error) {
    // send error
    res.send({
      message: "Something went wrong",
    });
  }
};

export const add = async (req, res) => {
  const movie = new Movie(req.body);

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
  movie.thumbnail = thumbnailDest;

  try {
    // save movie to db
    await movie.save();

    // asign categories to movie
    await Category.find({ _id: catIds }).updateMany({ movies: movie });

    // response
    return res.status(201).send({
      message: "Movie was successfully added",
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "something went wrong",
    });
  }
};

export const removeById = async (req, res) => {
  try {
    // delete movie from db
    await Movie.deleteOne({ _id: req.params.id });

    // response
    res.status(202).send({
      message: "Movie was successfully deleted",
    });
  } catch (error) {
    // send error
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};

export const updateById = async (req, res) => {
  // store categories ids from req.body
  const catIds = req.body.categories;

  // copy req.body to updatedMovie const
  const updatedMovie = {
    ...req.body,
  };

  try {
    // find movie and update
    await Movie.findOneAndUpdate({ _id: req.params.id }, updatedMovie, {
      returnOriginal: false,
    });

    // find categories from req.body and add movie
    await Category.find({ _id: catIds }).updateMany({
      movies: new Movie(req.body),
    });

    // response
    return res.status(202).send({
      message: "Movie was successfully updated",
    });
  } catch (error) {
    // send error
    console.log(error);
    res.status(400).send({
      message: JSON.stringify(error),
    });
  }
};
