import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import { TaskPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TasksFormPage';
import { TaskDetailPage } from './pages/TaskDetailPage';
import { Navegation } from './components/Navegation';
import { Toaster } from 'react-hot-toast';
function App(){
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navegation />
        <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/task-create" element={<TaskFormPage />} />
            <Route path="/task/:id_tarea" element={<TaskFormPage />} />
            <Route path="/taskDetial/:id_tarea" element={<TaskDetailPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
    );
}



export default App;