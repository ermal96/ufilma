const category = require("../models/category.model");

exports.get = async (_, res) => {
  try {
    const categories = await category.find();

    res.send({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};

exports.add = async (req, res) => {
  const newCategory = await new category(req.body);

  newCategory
    .save()
    .then(() => {
      res.send({
        success: true,
        message: "Category was successfully added",
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        message: err,
      });
    });
};

exports.delete = async (req, res) => {
  try {
    await category.remove({ _id: req.params.slug });

    res.send({
      success: true,
      message: `Category was successfully deleted`,
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
    await category.update(req.body);

    res.send({
      success: true,
      message: `Category was successfully updated}`,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error,
    });
  }
};
