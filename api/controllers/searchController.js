import { Movie } from "../models/movieModel.js";

export const get = async (req, res) => {
  Movie.search(req.params.query, (error, results) => {
    if (!error) {
      res.status(200).send({
        movies: results,
      });
    } else {
      return res.status(400).send({
        message: "Dicka shkoi keq ju lutem provoni me vonë",
      });
    }
  });
};
