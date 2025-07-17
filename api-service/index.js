import server from "./src/server.js";
import { testConnection, syncDB } from "./src/database/services/servicesDb.js";


testConnection().then(() => {
    syncDB().then(() => {
        server.listen(3001, () => {
            console.log('Servidor escuchando en puerto 3001');
        });
    });
});