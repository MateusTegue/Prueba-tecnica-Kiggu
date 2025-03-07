import 'dotenv/config';
import pkg from 'pg';

const { Pool } = pkg;

// Configurar la conexión a PostgreSQL
export const database = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const conectDB = async () => {
    try {
         const connection = await database.connect(); // Cambio aquí
         console.log('✅ Conectado a la base de datos PostgreSQL');
         connection.release(); // Liberar la conexión
    } catch (error) {
         console.error('❌ Error al conectar a la base de datos', error);
         process.exit(1);
    }
};
