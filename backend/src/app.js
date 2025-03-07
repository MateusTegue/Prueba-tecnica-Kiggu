import express from 'express';
import morgan from 'morgan';
import taskRouter from './router/task.routes.js';


const App = express();

App.use(morgan('dev'))
App.use(express.json())

App.use(taskRouter);



export default App;