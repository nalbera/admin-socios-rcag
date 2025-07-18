import AuthUsers from "../../database/models/AuthUsers.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const loginUserController = async (req, res, next) => {
    try {
        
        const { userName, password } = req.body;

        if (!userName || !password) {
            res.send({
                message: 'Faltan datos'
            })
        };

        const currentUser = await AuthUsers.findOne({where: {userName: userName}});

        if (!currentUser) {
            res.send({
                message: 'Usuario o contraseña incorrecta'
            })
        }

        const passwordDecrypt = await bcrypt.compare(password, currentUser.password);

        if (!passwordDecrypt) {
            res.send({
                message: 'Usuario o contraseña incorrecta'
            })
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
        console.log(error);
    }
}

export default loginUserController;