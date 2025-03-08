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


// obtener todas las tares de la base de datos 
const obtenerTareasModel = async () => {
    try{

        const { rows } = await database.query(`SELECT * FROM task`);
        return rows;

    } catch (error){
        console.log(error);
    }
}

// obtener tarea por id de la base de datos
const obtenerTareaIdModel = async (id_tarea) => {
   const query = {
    text: `SELECT * FROM task WHERE id_tarea = $1`,
    values: [id_tarea]
    }
    const { rows } = await database.query(query);
    return rows[0];
}

// actualizar tares usando el id de la base de datos 
const actualizarTareaModel = async (id_tarea, titulo, descripcion, estado) => {
    const query = {
        text: `UPDATE task SET titulo = $1, descripcion = $2, estado = $3 WHERE id_tarea = $4 RETURNING *`,
        values: [titulo, descripcion, estado, id_tarea]  // Corregido el orden de los valores
    };
    const { rows } = await database.query(query);
    return rows[0];
};

// eliminar tareas de la base de datos
const eliminarTareaModel = async (id_tarea) => {
   try{
    const query = "DELETE FROM task WHERE id_tarea = $1 RETURNING *";
    const { rows } = await database.query(query, [id_tarea]);
    if(rows.length === 0){
        throw new Error("No se encontró la tarea");
    }
    return rows[0];
   } catch ( error ){
     throw new Error("No se pudo eliminar la tarea");
   }
   
}


// exportar el modelo de tareas para que se pueda utilizar en otros archivos.
export const TaresaModel = {
    registrarTareasModel,
    obtenerTareasModel,
    obtenerTareaIdModel,
    actualizarTareaModel,
    eliminarTareaModel
    }  