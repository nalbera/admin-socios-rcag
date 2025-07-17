import connection from "../config/configDb.js";
import csv from 'csv-parser';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

import AuthUsers from "../models/AuthUsers.js";
import Categorias from "../models/Categorias.js";
import Socios from "../models/Socios.js";


export const testConnection = async () => {
    try {
        
        await connection.authenticate();
        console.log(`Conectado a base de datos ${connection.getDatabaseName()}`);
        
    } catch (error) {
        console.log(error);
    }
}

export const syncDB = async () => {
    await AuthUsers.sync({ alter: true });
    await Categorias.sync({ alter: true });
    await Socios.sync({ alter: true });
    // Socios.sync()
    // .then(() => {
    //     console.log('Socios sincronizados');
        
    //     fs.createReadStream('sociosSchemma.csv')
    //     .pipe(csv())
    //     .on('data', (row) => {
    //         const datos = {
    //             id: uuidv4(),
    //             nro_socio: row.nro_socio,
    //             apellido: row.apellido,
    //             nombres: row.nombres,
    //             dni: row.dni,
    //             licencia: row.licencia,
    //             telefono: row.telefono,
    //             calle_y_nro: row.calle_y_nro,
    //             ciudad: row.ciudad,
    //             categoria: row.categoria
    //         };
    //         console.log(row.nro_socio);
            
    //         // Socios.create(datos)
    //         // .then(() => {
    //         //     console.log('Fila insertada');
    //         // })
    //         // .catch((error) => {
    //         //     console.log('Error al insertar fila: ',error);
    //         // })
    //     })
    //     .on('end', () => {
    //         console.log('Importacion completada');
    //     });
    // })
    // .catch((err) => {
    //     console.log('Error al sincronizar tabla: ', err);
    // });
}