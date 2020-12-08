const Category = require("../models/category.model");

exports.get = async (_, res) => {
  try {
    const categories = await Category.find()
      .select("-__v ")
      .populate("movies", "name");

    res.send({
      data: categories,
    });
  } catch (error) {
    res.send({
      message: error,
    });
  }
};

exports.add = async (req, res) => {
  const category = await new Category(req.body);

  try {
    await category.save();
    res.send({
      message: "Category was successfully added",
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Category.remove({ _id: req.params.slug });

    res.send({
      message: `Category was successfully deleted`,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

exports.update = async (req, res) => {
  try {
    await Category.update(req.body);

    res.send({
      message: `Category was successfully updated`,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};
