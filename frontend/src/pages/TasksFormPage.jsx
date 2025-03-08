import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createTask } from "../api/task.api.js";
import { deleteTask } from "../api/task.api.js";
import { updateTask } from "../api/task.api.js";
import { getTask } from "../api/task.api.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";



export function TaskFormPage() {
    const { register, handleSubmit, formState:{
        errors}, setValue
     } = useForm();
    const navigate = useNavigate();
    const  params  = useParams();
    

    const onSubmit = handleSubmit(async data => {
        if(params.id_tarea){
            await updateTask(params.id_tarea, data);
            toast.success('Tarea Actualizada', {
                position: 'top-left',
            })
            
        } else {
        await createTask(data);
        toast.success('Tarea Creada', {
            position: 'top-left',
        })
        }
        navigate("/tasks");
    });

    useEffect (() => {
       async function loadTask(){
            if(params.id_tarea){
                const res = await getTask(params.id_tarea);
                setValue('titulo', res.data.titulo)
                setValue('descripcion', res.data.descripcion)
            }
        }
        loadTask();
    }, [])

    return (
        <div className="max-w-xl mx-auto"> 
            <h2 className="text-center p-3 text-2xl font-bold">Crear Nueva Tarea</h2>
            <form onSubmit={onSubmit}>
                <input
                    className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    type="text"
                    placeholder="Título"
                    {...register("titulo", { required: true })}
                />
                {errors.titulo && <span>Este campo es requerido</span>}

                <textarea
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
                    rows="3"
                    placeholder="Descripción"
                    {...register("descripcion", { required: true })}
                />
                {errors.descripcion && <span>Este campo es requerido</span>}

                <select 
                className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"

                {...register("estado", { required: true })}>
                    <option value="TODO">To Do</option>
                    <option value="PROGRESS">Progress</option>
                    <option value="DONE">Done</option>
                </select>
                <button className="bg-cyan-500 p-3 rounded-2xl hover:bg-cyan-600 block w-full mt-3 hover:cursor-pointer" >Crear tarea</button>
            </form>
            { params.id_tarea && <button className="bg-red-500 p-3 rounded-lg w-48 mt-3" onClick={async () =>{
                const accepted = window.confirm("¿Estás seguro de que deseas eliminar la tarea?");
                if (accepted) {
                    await deleteTask(params.id_tarea);
                    toast.success('Tareas Eliminada', {
                        position: 'top-left',
                    })    
                    navigate("/tasks");
                }
            }}>eliminar</button> }
        </div>
    );
}
