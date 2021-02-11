import { Movie } from "../models/movieModel.js";
import { Category } from "../models/categoryModel.js";
import { generateImagePath, upload } from "../utils/upload.js";

export const getAll = async (_, res) => {
  try {
    // get movies from db
    const movies = await Movie.find()
      .select("name year thumbnail cover slug description quality trailerUrl")
      .populate("categories", "name")
      .sort({ _id: -1 })
      .limit(30);
    // send movies
    return res.status(200).send({
      movies,
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "Dicka shkoi keq me marrjen e filmave",
    });
  }
};

export const getWatching = async (req, res) => {
  try {
    // get movie from db
    const movies = await Movie.find({ _id: req.body._id }).select("-__v").populate("categories", "name");

    // send movie
    return res.status(200).send({
      movies,
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "Dicka shkoi keq me filmat e pare",
    });
  }
};

export const getFavorites = async (req, res) => {
  try {
    // get movie from db
    const movies = await Movie.find({ _id: req.body }).select("-__v").populate("categories", "name");

    // send movie
    return res.status(200).send({
      movies,
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "Dicka shkoi keq me filmat e preferuar",
    });
  }
};

export const getById = async (req, res) => {
  try {
    // get movie from db
    const movie = await Movie.find({ _id: req.params.id }).select("-__v").populate("categories", "name");

    // send movie
    return res.status(200).send({
      movie,
    });
  } catch (error) {
    // send error
    return res.send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const getMovesByCategory = async (req, res) => {
  try {
    // get movie from db
    const movies = await Movie.find({ categories: { _id: req.params.id } })
      .select("-__v")
      .populate("categories", "name");
    // send movie
    return res.status(200).send({
      movies,
    });
  } catch (error) {
    // send error
    return res.send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const add = async (req, res) => {
  const movie = new Movie(req.body);

  // get images path from req
  if (!req.files.thumbnail) {
    return res.status(400).send({ message: "Ju lutem vendosni thumbnail " });
  }
  if (!req.files.cover) {
    return res.status(400).send({ message: "Ju lutem vendosni cover " });
  }

  if (!req.body.categories) {
    return res.status(400).send({ message: "Ju lutem zgjidhni nje kategori " });
  }

  const thumbnailSrc = req.files.thumbnail.path;
  const coverSrc = req.files.cover.path;

  // store images dest
  const thumbnailDest = req.files.thumbnail.name;
  const coverDest = req.files.cover.name;

  // upload images
  upload(thumbnailSrc, thumbnailDest, res);
  upload(coverSrc, coverDest, res);

  // store categories ids from req.body
  const catIds = req.body.categories;

  // asign thumbnail
  movie.thumbnail = generateImagePath(thumbnailDest);
  movie.cover = generateImagePath(coverDest);

  try {
    // save movie to db
    await movie.save();

    // asign categories to movie
    await Category.find({ _id: catIds }).updateMany({ movies: movie });

    // response
    return res.status(201).send({
      message: "Filmi u shtua me suksess",
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const removeById = async (req, res) => {
  try {
    // delete movie from db
    await Movie.deleteOne({ _id: req.params.id });

    // response
    res.status(202).send({
      message: "Kategoria u fshi me sukses",
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};

export const updateById = async (req, res) => {
  // store categories ids from req.body
  const catIds = req.body.categories;

  // copy req.body to updatedMovie const
  const updatedMovie = {
    name: req.body.name,
    description: req.body.description,
    quality: req.body.quality,
    year: req.body.year,
    ratio: req.body.ratio,
    trailerUrl: req.body.trailerUrl,
    time: req.body.time,
    subtitle: req.body.subtitle,
    videoUrl: req.body.videoUrl,
  };

  if (req.body.categories) {
    updatedMovie.categories = req.body.categories;
  }

  if (req.files.thumbnail) {
    // get images path from req
    const thumbnailSrc = req.files.thumbnail.path;

    // store images dest
    const thumbnailDest = req.files.thumbnail.name;

    // upload images
    upload(thumbnailSrc, thumbnailDest, res);

    // asign thumbnail
    updatedMovie.thumbnail = generateImagePath(thumbnailDest);
  }

  if (req.files.cover) {
    // get images path from req
    const coverSrc = req.files.cover.path;

    // store images dest
    const coverDest = req.files.cover.name;

    // upload images
    upload(coverSrc, coverDest, res);

    // asign cover
    updatedMovie.cover = generateImagePath(coverDest);
  }

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
      message: "Filmi u modifikua me sukses",
    });
  } catch (error) {
    // send error
    return res.status(400).send({
      message: "Dicka shkoi keq ju lutem provoni me vonë",
    });
  }
};
