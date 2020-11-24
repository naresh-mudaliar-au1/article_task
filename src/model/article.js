import { DataTypes } from "sequelize";
import sequelize from "../config/connection";

const { STRING } = DataTypes;

const article = sequelize.define("article", {
  nickname: { type: STRING, allowNull: false },
  title: { type: STRING, allowNull: false },
  content: { type: STRING, allowNull: false },
});

export default article;
