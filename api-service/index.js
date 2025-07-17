import server from "./src/server.js";
import { testConnection } from "./src/database/services/servicesDb.js";


testConnection().then(() => {
    server.listen(3001, () => {
        console.log('Servidor escuchando en puerto 3001');
    })
})