import {Movie} from "../models/movie.model.js";
import {Category} from  "../models/category.model.js";

export const getAllMovies = async (_, res) => {
  try {
    const movies = await Movie.find()
      .select("name year imageUrl slug")
      .populate("categories", "name");

    res.send({
      data: movies,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

export const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find({ slug: req.params.slug })
      .select("-__v")
      .populate("categories", "name");

    res.send({
      data: movies,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

export const add = async (req, res) => {
  const movie = await new Movie(req.body);

  const catIds = req.body.categories;

  try {
    await movie.save();
    await Category.find({ _id: catIds }).updateMany({ movies: movie });
    res.send({
      message: "Movie was successfully added",
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

export const remove = async (req, res) => {
  try {
    await Movie.deleteOne({ _id: req.params.slug });

    res.send({
      message: `Movie was successfully deleted`,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

export const update = async (req, res) => {
  const catIds = req.body.categories;

  try {
    await Movie.updateOne(req.body);
    await Category.find({ _id: catIds }).updateMany({
      movies: new Movie(req.body),
    });
    res.send({
      message: `Movie was successfully updated`,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};
