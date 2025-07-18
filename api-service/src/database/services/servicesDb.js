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
}