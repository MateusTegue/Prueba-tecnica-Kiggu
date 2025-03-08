import { useNavigate } from "react-router-dom"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTask } from "../api/task.api.js";

// funcion para mostrar una tarea de manera independiente y poder leer su contenido completamente 
export function TaskDetailPage() {
    const navigate = useNavigate()

    const { id_tarea } = useParams(); // Obtiene el ID de la URL
    const [task , setTask] = useState([]);
    
    useEffect(() => {
        
        async function fetchData() {
            try {
                const res = await getTask(id_tarea);
                setTask(res.data);
            } catch (error) {
                console.error("Error al obtener la formación:", error);
            } finally {
            }
        }
        fetchData();
    }, [id_tarea]);

   
    return (
        <div className="container bg-cyan-800 p-4">
            <h1 className="font-bold text-3xl m-3">{task.titulo}</h1>
            <p className="text-gray-300 text-ls m-3">{task.descripcion}</p>
            <p className="text-red-500 font-bold m-3">{task.estado}</p>
            <button className="bg-cyan-500 p-3 font-bold hover:bg-cyan-600 hover:cursor-pointer rounded-lg m-3" onClick={() => {
            navigate('/task/'+ task.id_tarea)
        }}><p>Editar Tarea</p></button>
        </div>
    );
}