import { DataTypes, INTEGER } from "sequelize";

import sequelize from "../config/connection";
import { commentModel } from "./";

const { STRING } = DataTypes;

const thread = sequelize.define("thread", {
  nickname: { type: STRING, allowNull: false },
  content: { type: STRING, allowNull: false },
});

//Relations
commentModel.hasMany(thread, { as: "thread" });

export default thread;
