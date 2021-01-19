import { Movie } from "../models/movie.model.js";

export const get = async (req, res) => {
  try {
    const movies = await Movie.find({ name: req.params.id });
    res.status(200).send({
      movies,
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};
