import { Router } from "express";
import { v4 as uuidv4 } from 'uuid';
import Socios from "../database/models/Socios.js";

import socios from './socios.json' with { type: "json" };

import {
    createSocioController,
    listAllSociosController,
    updateSocioController,
    getSocioController
} from '../controllers/socios/index.js';

const sociosRouter = Router();


sociosRouter.get('/', (req, res, next) => {
    res.send('Listado de socios');
});


sociosRouter.get('/seeder', async (req, res, next) => {
    try {
        
        for (let socio of socios) {
            let newSocio = {
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
       next(error);
    }
});

sociosRouter.post('/new', createSocioController);

sociosRouter.get('/all', listAllSociosController);

sociosRouter.get('/:nro_socio', getSocioController);

sociosRouter.put('/update/:nro_socio', updateSocioController);

export default sociosRouter;