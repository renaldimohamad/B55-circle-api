import { Router } from "express";
import * as postController from "../controllers/PostController";
import authorization from "../middlewares/authorization";
import upload from "../middlewares/fileUpload";
const postRouter = Router();

postRouter.get("/", postController.findAll);

postRouter.get("/:id", postController.findById);

postRouter.post(
  "/",
  authorization,
  upload.array("image"),
  postController.create
);

// postRouter.post("/", authorization, postController.create);

postRouter.put("/:id", postController.update);

postRouter.delete("/:id", postController.remove);

export default postRouter;
