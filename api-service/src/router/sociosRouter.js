import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import Socios from "../database/models/Socios.js";

import socios from './socios.json' with { type: "json" };

const sociosRouter = Router();


sociosRouter.get('/', (req, res, next) => {
    res.send('Listado de socios');
});


sociosRouter.get('/seeder', async (req, res, next) => {
    try {
        
        for (let socio of socios) {
            let newSocio = {
                // id: uuidv4(),
                nro_socio: socio.nro_socio,
                apellido: socio.apellido,
                nombres: socio.nombres,
                dni: socio.dni.toString(),
                licencia: socio.licencia,
                telefono: socio.telefono.toString(),
                calle_y_nro: socio.calle_y_nro,
                ciudad: socio.ciudad,
                categoria: socio.categoria
            }   
            await Socios.create(newSocio);
        }

        res.send('Socios creados');

    } catch (error) {
        console.log(error);
    }
});


export default sociosRouter;