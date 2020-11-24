import Joi from "joi";

const articleSchema = Joi.object().keys({
  nickname: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const commentSchema = Joi.object().keys({
  nickname: Joi.string().required(),
  content: Joi.string().required(),
  articleId: Joi.number().required(),
});

export default { articleSchema, commentSchema };
