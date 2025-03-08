import { Router } from "express";
import { registrarTask } from "../controllers/task.controller.js";
import { obtenerTareas } from "../controllers/task.controller.js";
import { obtenerTareaId } from "../controllers/task.controller.js";
import { actualizarTareaId } from "../controllers/task.controller.js";
import { eliminarTareas } from "../controllers/task.controller.js";
const router = Router();

// ruta para registrar tareas 
router.post("/api/task", registrarTask);
// rutas para obtener todas las tareas 
router.get("/api/task", obtenerTareas);
// ruta para obtener una tarea por id
router.get("/api/task/:id_tarea", obtenerTareaId);
// ruta para actualizar una tarea por id
router.put("/api/task/:id_tarea", actualizarTareaId);
// ruta para eliminar una tarea por id
router.delete("/api/task/:id_tarea", eliminarTareas);


export default router;  //exportamos el router para poder usarlo el App.js