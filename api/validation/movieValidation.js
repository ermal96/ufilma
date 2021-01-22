import Joi from "joi";

export const validateMovie = async (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required.required(),
    quality: Joi.string().required(),
    year: Joi.number().required(),
    trailerUrl: Joi.string(),
    time: Joi.string().required(),
    videoUrl: Joi.string().required(),
    imageUrl: Joi.string().required(),
    ratio: Joi.string(),
  });

  return schema.validate(data);
};
