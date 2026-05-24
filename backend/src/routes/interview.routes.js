import { Router } from "express";

import { authUser } from "../middleware/auth.middleware.js";

import {
  createInterviewController
} from "../controllers/interview.controller.js";

const interviewRouter = Router();



// create interview report
interviewRouter.post(
  "/create",
  authUser,
  createInterviewController
);



export default interviewRouter;