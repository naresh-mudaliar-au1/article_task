import { threadModel } from "../model";

const postComment = async (req, res) => {
  try {
    const { body } = req;
    const { nickname, content, commentId } = body;

    let data = {
      nickname,
      content,
      commentId,
    };

    const addComments = await threadModel.create(data);

    if (!addComments) throw new Error("Error While Saving Data");

    addComments && res.status(200).send({ data: addComments });
  } catch (error) {
    res.status(400).send({ Error: error.message });
  }
};

export default { postComment };
