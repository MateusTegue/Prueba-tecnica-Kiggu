import { Link } from "react-router-dom"

export function Navegation(){
    return(
        <div>
            <Link to="/tasks">Tasks</Link>
            <Link to="/task-create">Create Tasks</Link>
        </div>
    )
}