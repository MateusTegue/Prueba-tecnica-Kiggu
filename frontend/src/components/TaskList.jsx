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
        
        loadTasks();

    }, []);
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 m-4">
            {tasks.map(task => (
                <TaskCard key={task.id_tarea} task={task}/>
            ))}
        </div>;
        
}