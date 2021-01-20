import { Movie } from "../models/movie.model.js";

export const get = async (req, res) => {
  Movie.search(req.params.query, (error, results) => {
    if (!error) {
      res.status(200).send({
        movies: results,
      });
    } else {
      res.status(500).send({
        message: "something went wrong",
      });
    }
  });
};
