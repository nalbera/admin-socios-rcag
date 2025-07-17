import connection from "../config/configDb.js";


export const testConnection = async () => {
    try {
        
        await connection.authenticate();
        console.log(`Conectado a base de datos ${connection.getDatabaseName()}`);
        
    } catch (error) {
        console.log(error);
    }
}