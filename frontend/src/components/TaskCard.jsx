import { Link } from "react-router-dom"

// componente para las cards de cada una de las tareas listadas 
export function TaskCard({ task }){
    return (
        <div className="bg-cyan-900 p-3 hover:bg-cyan-500 hover:cursor-pointer"

        

        key={task.id_tarea}>
            <h1 className="font-bold text-2xl m-4">{task.titulo.length > 7 ? task.titulo.substring(0 , 7 ) + "..." : task.titulo}</h1>
            <p className="text-gray-300 text-lg m-4">{task.descripcion.length > 7 ? task.descripcion.substring(0, 10) + "..." : task.descripcion}</p>
            <p className="text-red-500 font-bold m-4">{task.estado}</p>
            <Link to={`/taskDetial/${task.id_tarea}`} className="block  m-4  bg-blue-500 text-white font-semibold py-2 rounded-lg text-center hover:bg-blue-600 transition">Leer...</Link>
         </div>
    )
}