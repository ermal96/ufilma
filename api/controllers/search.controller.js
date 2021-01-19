import { Movie } from "../models/movie.model.js";

export const get = async (req, res) => {
  try {
    const movies = Movie.find({ name: req.body.name });
    res.status(200).send({
      movies,
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};
