import { useNavigate } from "react-router-dom"
export function TaskCard({ task }){

    const navigate = useNavigate()

    return (
        <div style={{background:"#101010"}}

        onClick={() => {
            navigate('/task/'+ task.id_tarea)
        }}

        key={task.id_tarea}>
            <h2>{task.titulo}</h2>
            <p>{task.descripcion}</p>
            <p>{task.estado}</p>
            <hr />
         </div>
        
    )
}