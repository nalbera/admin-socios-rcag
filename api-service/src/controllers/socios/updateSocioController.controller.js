import Socios from "../../database/models/Socios.js";


const updateSocioController = async (req, res, next) => {
    try {
        
        const { nro_socio } = req.params;
        const {apellido, nombres, dni, licencia, telefono, calleynro, ciudad, categoria} = req.body;

        await Socios.update(
            {
               apellido,
               nombres,
               dni,
               licencia,
               telefono,
               calle_y_nro: calleynro,
               ciudad,
               categoria 
            },
            {
                where: { nro_socio }
            }
        );

        res.status(200).send({
            status: 'ok',
            message: 'Socio modificado correctamente',
        });

    } catch (error) {
        next(error);
    }
}

export default updateSocioController;