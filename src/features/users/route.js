
import { createUser } from "./controller";

import express from "express"; 

const userRoute = express.Router();

userRoute.post("/", createUser);

export default userRoute;
