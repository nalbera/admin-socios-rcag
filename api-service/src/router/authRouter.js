import { Router } from "express";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

import AuthUsers from "../database/models/AuthUsers.js";
import loginUserController from "../controllers/authusers/loginUserController.controller.js";

const authRouter = Router();

dotenv.config();


authRouter.get('/look', async (req, res) => {

    const {USER, PASSWORD} = process.env;

    try {
        
        const passwordEncrypt = await bcrypt.hash(PASSWORD, 10);

        const authUser = {
            firstName: 'Soy',
            lastName: 'Solo yo',
            userName: USER,
            password: passwordEncrypt
        }

        await AuthUsers.create(authUser);

        res.send({
            message: 'AuthUser creado correctamente....'
        })

    } catch (error) {
        console.log(error);
    }
})

authRouter.post('/login', loginUserController);


export default authRouter;