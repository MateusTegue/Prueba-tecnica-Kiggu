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

// esta dependencia nos sirve para poder ver claramente las peticiones que se estan haciendo al backend 
App.use(morgan('dev'))
// esta dependencia nos sirve para poder recibir datos en formato json
App.use(express.json())
// esta dependencia nos sirve para poder recibir datos que se estan enviando por la url
App.use(taskRouter);


// exportamos el App para usarlo en el index.js el cual es el archivo principal de la aplicacion
export default App;