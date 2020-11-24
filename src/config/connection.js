import { Sequelize } from "sequelize";

require("dotenv").config({ path: ".env" });

const MODELNAME = process.env.MODELNAME,
  NAME = process.env.NAME,
  PASSWORD = process.env.PASSWORD,
  host = process.env.HOST,
  dialect = process.env.DIALECT;

const sequelize = new Sequelize(MODELNAME, NAME, PASSWORD, {
  host,
  dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(function (err) {
    console.log("Connection has been established successfully.");
  })
  .catch(function (err) {
    console.log("Unable to connect to the database:", err);
  });

sequelize.sync();

export default sequelize;
