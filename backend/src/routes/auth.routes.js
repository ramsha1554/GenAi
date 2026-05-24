import { Router } from "express";

import {
  registerUserController,
  loginUserController,
  logoutUserController,
  getMeController
} from "../controllers/auth.controller.js";
import { authUser } from "../middleware/auth.middleware.js";   
const authRouter = Router();



/**
 * @route POST /api/auth/register
 * @description Register new user
 * @access Public
 */
authRouter.post("/register", registerUserController);



/**
 * @route POST /api/auth/login
 * @description Login user
 * @access Public
 */
authRouter.post("/login", loginUserController);



/**
 * @route GET /api/auth/logout
 * @description Logout user
 * @access Public
 */
authRouter.get("/logout", logoutUserController);


authRouter.get(
  "/get-me",
  authUser,
  getMeController
);   



export default authRouter;