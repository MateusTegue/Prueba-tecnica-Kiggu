import { Router } from "express";
import { registrarTask } from "../controllers/task.controller.js";
import { obtenerTareas } from "../controllers/task.controller.js";
import { obtenerTareaId } from "../controllers/task.controller.js";


const router = Router();

router.post("/api/task", registrarTask);
router.get("/api/task", obtenerTareas);
router.get("/api/task/:id_tarea", obtenerTareaId);


export default router;  //exportamos el router para poder usarlo en otros archivos.  //exportamos