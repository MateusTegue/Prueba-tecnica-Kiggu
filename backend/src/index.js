import App from "./app.js";
import {PORT} from "./config/puerto.js";
import { conectDB } from "./database/conexiondb.js";


// funcion la cual es el cuerpo de la aplicacion
async function main() {
    try {
        // llamamos la funcion de la base de datos
        await conectDB();
        // creamos el servidor y le pasamos el puerto en el cual se va a ejecutar
        App.listen(PORT, () => {
            console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("❌ Error al conectarse a la base de datos", error);
    }
}

main();