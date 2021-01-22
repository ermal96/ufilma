import Joi from "joi";

export const validateMovie = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),
    description: Joi.string().required().label("Description"),
    quality: Joi.string().required().label("Quality"),
    year: Joi.number().required().label("Year"),
    trailerUrl: Joi.string().label("Trailer url"),
    time: Joi.string().required().label("Time"),
    videoUrl: Joi.string().required().label("Video url"),
    ratio: Joi.string(),
    categories: Joi.alternatives()
      .try(Joi.array().items(Joi.string()), Joi.string())
      .required()
      .label("Categories"),
  });

  try {
    await schema.validateAsync({ ...req.body });

    next();
  } catch (error) {
    return res.status(400).send({
      message: error.details[0].message,
    });
  }
};
