import { Movie } from "../models/movie.model.js";

export const get = async (req, res) => {
  try {
    const movies = await Movie.find({ $text: { $search: req.params.query } });
    res.status(200).send({
      movies,
    });
  } catch (error) {
    res.status(400).send({
      message: "Something went wrong",
    });
  }
};
