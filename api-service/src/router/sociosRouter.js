import { Router } from "express";

const sociosRouter = Router();

sociosRouter.get('/', (req, res, next) => {
    res.send('Listado de socios');
})

export default sociosRouter;