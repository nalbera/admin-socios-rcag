import Socios from "../../database/models/Socios.js";

const createSocioController = async (req, res, next) => {
    try {
        
        const {apellido, nombres, dni, licencia, telefono, calleynro, ciudad, categoria} = req.body;

        const socios = await Socios.findAll({
            order: [['nro_socio', 'DESC']],
            limit: 1
        });


        const newNroSocio = socios[0].nro_socio + 1;
        
        const newSocio = await Socios.create({
            nro_socio: newNroSocio,
            apellido,
            nombres,
            dni,
            licencia,
            telefono,
            calle_y_nro: calleynro,
            ciudad,
            categoria
        });

        res.status(201).send({
            status: 'ok',
            data: newSocio
        });

    } catch (error) {
        next(error);
    }
}

export default createSocioController;