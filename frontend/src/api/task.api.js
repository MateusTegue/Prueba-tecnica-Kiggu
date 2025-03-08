import axios from 'axios';


// intancia para la direccion del backend
const taskApi = axios.create({
  baseURL: 'http://localhost:3000/api/task'
  });

// obtener las tares que estan registradas en la base de datos 
export const getAllTasks = () => {
  return taskApi.get('/')
}


// funcion para crear una tarea
export const createTask = (task) => {
  return taskApi.post('/', task)
}

// funcion para eliminar tareas 
export const deleteTask = (id_tarea) => {
  return taskApi.delete(`/${id_tarea}`)
}

// metodo para actualizar
export const updateTask = (id_tarea, task) => {
  return taskApi.put(`/${id_tarea}`, task)
  }  

  // metodo para obtener una tarea
  export const getTask = (id_tarea) => {
    return taskApi.get(`/${id_tarea}`)
    }