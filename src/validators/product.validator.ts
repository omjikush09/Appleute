import Joi from "joi";

const createProductSchema = Joi.object({
  title: Joi.string().max(30).required(),
  desc: Joi.string(),
  categoryId: Joi.number().required(),
});

export { createProductSchema };
