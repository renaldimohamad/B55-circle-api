import authRoute from "./AuthRoute";
import postRouter from "./PostRoute";
import { Router } from "express";
import repliesRoute from "./RepliesRoute";

const route = Router();

route.use("/posts", postRouter);
route.use("/auth", authRoute);
route.use("/replies", repliesRoute);

export default route;
