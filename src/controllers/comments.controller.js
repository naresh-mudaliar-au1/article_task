import { commentModel } from "../model";
import { validationSchema } from "../joi";

const postComment = async (req, res) => {
  try {
    const { body } = req;
    const { nickname, content, articleId } = body;

    let data = {
      nickname,
      content,
      articleId,
    };

    let { error } = validationSchema.commentSchema.validate(data);
    if (error) throw new Error(error);

    const addComments = await commentModel.create(data);

    if (!addComments) throw new Error("Error While Saving Data");

    addComments && res.status(200).send({ data: addComments });
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

export default { postComment };
