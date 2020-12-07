const Movie = require("../models/movie.model");

exports.get = async (_, res) => {
  try {
    const movies = await Movie.find();

    res.send({
      success: true,
      data: movies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};

exports.add = async (req, res) => {
  const movie = await new Movie(req.body);

  try {
    await movie.save();
    res.send({
      success: true,
      message: "Movie was successfully added",
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Movie.remove({ _id: req.params.slug });

    res.send({
      success: true,
      message: `Movie was successfully deleted`,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};

exports.update = async (req, res) => {
  try {
    await Movie.update(req.body);

    res.send({
      success: true,
      message: `Movie was successfully updated`,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
