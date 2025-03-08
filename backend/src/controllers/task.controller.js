import { TaresaModel } from "../models/task.model.js"; // importamos el model que definimos en la carpeta models

// registro de task controllers
export const registrarTask = async (req, res) => {
    try {

        const { titulo , descripcion, estado } = req.body;
        if (!titulo || !descripcion || !estado) {

            return res.status(400).json({ message: "Faltan campos" });

            }
        
        // crear nuevo estudiante
        const nuevaTask = await TaresaModel.registrarTareasModel(titulo , descripcion, estado);
        return res.status(201).json({ ok: true, message: "Tarea creado con éxito", data : nuevaTask });

    } catch (error) {
        console.log(error);
    }
}


// obtener todas las tareas que estan registradas en la base de datos 
export const obtenerTareas = async (req, res) => {
    try {
        const task = await TaresaModel.obtenerTareasModel();
        return res.status(200).json(task);
    } catch (error) {
        return res.status(500).json({message : "Error al obtener tareas"});
    }
}

// obtener un tarea por id si se encuentra en la base de datos
export const obtenerTareaId = async (req, res) => {
    try {
        const { id_tarea } = req.params;
        if(!id_tarea){
            return res.status(400).json({message : "Falta id"});
        }

        // consultar la tareas de la base de datos 
        const task = await TaresaModel.obtenerTareaIdModel(id_tarea);
        return res.status(200).json(task);

    } catch (error) {
        return res.status(500).json({message : "Error al obtener tarea"});
        }
}


// actualizar tarea con el id 
export const actualizarTareaId = async (req, res) => {
    try {
        const { id_tarea } = req.params;  // id_tarea sigue en params
        const { titulo, descripcion, estado } = req.body;  // Extraer datos del cuerpo de la solicitud

        if (!id_tarea || !titulo || !descripcion || !estado) {
            return res.status(400).json({ message: "Faltan campos" });
        }

        // actualizar la tareas de la base de datos
        const task = await TaresaModel.actualizarTareaModel(id_tarea, titulo, descripcion, estado);
        return res.status(200).json(task);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error al actualizar tarea" });
    }
};

// Eliminar tareaas de la base de datos 
export const eliminarTareas = async (req, res) => {
    try {
        const { id_tarea } = req.params;
        if (!id_tarea) {
            return res.status(400).json({ message: "Falta id" });
        }
        const task = await TaresaModel.eliminarTareaModel(id_tarea);
        return res.status(200).json({message : "Tarea eliminada con éxito"});
          } catch (error) {
            return res.status(500).json({ message: "Error al eliminar tarea" });
        }
}
// fin del controlador, el cual llamamos logica del negocio