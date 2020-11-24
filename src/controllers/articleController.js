import { articleModel } from "../model";
import { validationSchema } from "../joi";

const createArticle = async (req, res) => {
  try {
    const { body } = req;
    const { nickname, title, content } = body;

    let data = {
      nickname,
      title,
      content,
    };

    let { error } = validationSchema.articleSchema.validate(data);
    if (error) throw new Error(error);
    
    const addArticle = await articleModel.create(data);

    if (!addArticle) throw new Error("Error While Saving Data");

    addArticle && res.status(200).send({ data: body });
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

const getArticle = async (req, res) => {
  try {
    const { id, page } = req.query;

    let query = {};

    if (id) {
      query.where = { id };
      query.include = [{ all: true, nested: true }];
    } else {
      query.offset = page ? (page - 1) * 20 : 0;
      query.limit = 20;
    }

    const articles = await articleModel.findAll(query);

    articles && res.status(200).send({ articles });
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

export default { createArticle, getArticle };
