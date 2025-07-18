import AuthUsers from "../../database/models/AuthUsers.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import generateErrors from '../../errors/generateErrors.js';


const loginUserController = async (req, res, next) => {
    try {
        
        const { userName, password } = req.body;

        if (!userName || !password) {
            throw generateErrors('Email y password son requeridos', 400);
        };

        const currentUser = await AuthUsers.findOne({where: {userName: userName}});
        
        const passwordDecrypt = currentUser ? await bcrypt.compare(password, currentUser.password) : false;

        if (!currentUser || !passwordDecrypt) {
            throw generateErrors('Usuario o contraseña no coinciden', 401);
        }

        const payload = {
            id: currentUser.id,
            userName: currentUser.userName
        };

        const token = jwt.sign(payload, process.env.SECRET, {expiresIn: '1h'});

        res.status(200).send({
            status: 'ok',
            message: 'El usuario ha iniciado sesión correctamente',
            token
        });

    } catch (error) {
        next(error);
    }
}

export default loginUserController;