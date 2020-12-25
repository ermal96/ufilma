import Joi from "joi";

export const validateUser = async (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.pattern(
      new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$")
    )
      .required()
      .error(new Error("I am a custom error and I know it!")),
  });

  return schema.validate(data);
};
