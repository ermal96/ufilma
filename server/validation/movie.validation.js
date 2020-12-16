import Joi from "joi";

export const validateMovie = async (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    quality: Joi.string(),
    year: Joi.number(),
    trailerUrl: Joi.string().required(),
    time: Joi.string().required(),
    videoUrl: Joi.string().required(),
    imageUrl: Joi.string().required(),
  });

  return await schema.validate(data);
};
