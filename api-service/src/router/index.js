import { Router } from "express";

import authRouter from "./authRouter.js";
import sociosRouter from "./sociosRouter.js";

const mainRouter = Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/socios', sociosRouter);

export default mainRouter;