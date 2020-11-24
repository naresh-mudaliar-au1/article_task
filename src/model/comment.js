import { DataTypes } from "sequelize";

import sequelize from "../config/connection";
import { articleModel, threadModel } from "./";

const { STRING, JSON } = DataTypes;

const comment = sequelize.define("comment", {
  nickname: { type: STRING, allowNull: false },
  content: { type: STRING, allowNull: false },
});

//Relations
articleModel.hasMany(comment, { as: "comments" });
comment.belongsTo(articleModel, {
  as: "comment",
});

export default comment;
