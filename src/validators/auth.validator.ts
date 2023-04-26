import Joi from "joi";

const registerUserSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  username: Joi.string().max(30).required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required(),
});

export { registerUserSchema, loginSchema };
