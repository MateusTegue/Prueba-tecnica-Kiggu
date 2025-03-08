import { Link } from "react-router-dom"

export function Navegation(){
    return(
        <div className="flex justify-between py-3">
            <Link className="font-bold text-3xl mb-4" to="/tasks">Tasks</Link>
            <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-2 rounded-lg">
                <Link to="/task-create">Create Tasks</Link>
            </button>
        </div>
    )
}