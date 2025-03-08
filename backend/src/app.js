import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import taskRouter from './router/task.routes.js';


const App = express();

// configuracion para que el frontend pueda tener acceso al backend
App.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));

App.use(morgan('dev'))
App.use(express.json())

App.use(taskRouter);



export default App;