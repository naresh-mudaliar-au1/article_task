import express from "express";
import { json } from "body-parser";
require("dotenv").config({ path: ".env" });
import cors from "cors";

const server = express();

import { artitclRoute } from "./routes";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

server.use(json());

require("./config/connection");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.use(cors());
server.use(artitclRoute);

server.listen(PORT, () => {
  console.log(`Server Running at http://${HOST}:${PORT}/`);
});
