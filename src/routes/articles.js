import express from "express";
import {
  articleController,
  commentController,
  threadController,
} from "../controllers";

export default express
  .Router()
  .post("/article", articleController.createArticle)
  .get("/article", articleController.getArticle)
  .post("/comment", commentController.postComment)
  .post("/thread", threadController.postComment);
