import { database } from "../database/conexiondb.js";



// registrar de tareas 
const registrarTareasModel = async (titulo, descripcion, estado) => {
    const query = {
        text: `INSERT INTO task (titulo, descripcion, estado) VALUES ($1, $2, $3) RETURNING *`,
        values: [titulo, descripcion, estado]
        }

        const { row } = await database.query(query);
        return row;
}


// obtener tareas
const obtenerTareasModel = async () => {
    try{

        const { rows } = await database.query(`SELECT * FROM task`);
        return rows;

    } catch (error){
        console.log(error);
    }
}

// obtener tarea por id
const obtenerTareaIdModel = async (id_tarea) => {
   const query = {
    text: `SELECT * FROM task WHERE id_tarea = $1`,
    values: [id_tarea]
    }
    const { rows } = await database.query(query);
    return rows[0];
}


// exportar el modelo de tareas para que se pueda utilizar en otros archivos.
export const TaresaModel = {
    registrarTareasModel,
    obtenerTareasModel,
    obtenerTareaIdModel
    }  