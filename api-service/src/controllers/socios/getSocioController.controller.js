import Socios from "../../database/models/Socios.js";
import generateErrors from '../../errors/generateErrors.js';

const getSocioController = async (req, res, next) => {
    try {
        
        const { nro_socio } = req.params;

        const socio = await Socios.findOne(
            {
                where: {
                    nro_socio
                }
            }
        );

        if(!socio) throw generateErrors('No se encuentra un socio con ese numero', 404);

        res.status(200).send({
            status: 'ok',
            data: socio
        });

    } catch (error) {
        next(error);
    }
}

export default getSocioController;