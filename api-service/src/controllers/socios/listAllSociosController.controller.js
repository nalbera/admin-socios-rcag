import Socios from "../../database/models/Socios.js";

const listAllSociosController = async (req, res, next) => {
    try {
        
        const listSocios = await Socios.findAll();

        res.status(200).send({
            status: 'ok',
            data: listSocios
        });

    } catch (error) {
        next(error);
    }
}

export default listAllSociosController;