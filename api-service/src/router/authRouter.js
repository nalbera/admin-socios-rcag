import { Router } from "express";

const authRouter = Router();

authRouter.get('/login', (req, res, next) => {
    res.send('Soy el login');
})


export default authRouter;