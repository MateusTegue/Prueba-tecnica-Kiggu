import { useEffect, useState } from "react"
import { getAllTasks } from "../api/task.api.js";
import { TaskCard } from "./TaskCard.jsx";
import { toast } from "react-hot-toast";


export function TaskList(){
    
    const [tasks, setTasks] = useState([]);

    // funcion para cargar todas las tareas 
    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks();
            setTasks(res.data)
            }
            toast.success('Lista de Tareas Cargada', {
                position: 'top-center',
            }) 
        loadTasks();

    }, []);
    return <div className="grid grid-col-3 gap-3">
            {tasks.map(task => (
                <TaskCard key={task.id_tarea} task={task}/>
            ))}
        </div>;
        
}